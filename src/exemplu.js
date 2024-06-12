const artworkContainer = document.getElementById("artworks");

function createArtCard(artworkData) {
  const card = document.createElement("div");
  card.classList.add("art-card");
  card.classList.add("card");

  // Create image element
  const image = document.createElement("img");
  image.src = artworkData.thumbnail.lqip;
  image.alt = artworkData.title;
  image.height = 200;
  image.classList.add("card-img-top");
  card.appendChild(image);

  // Create card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Create title element
  const title = document.createElement("h5");
  title.textContent = artworkData.title;
  title.classList.add("card-title");
  cardBody.appendChild(title);

  // Create artist info element
  const artistInfo = document.createElement("p");
  artistInfo.textContent = `by ${artworkData.artist_display}`;
  artistInfo.classList.add("card-text");
  cardBody.appendChild(artistInfo);

  // Create date display element
  const dateDisplay = document.createElement("p");
  dateDisplay.textContent = artworkData.date_display;
  dateDisplay.classList.add("card-text");
  cardBody.appendChild(dateDisplay);

  return card;
}

fetch(
  "https://api.artic.edu/api/v1/artworks?limit=5&fields=id,title,artist_display,date_display,thumbnail"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const artworks = data.data;

    artworks.forEach((artwork) => {
      const card = createArtCard(artwork);
      artworkContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation: ", error);
  });
