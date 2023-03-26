const gamesList = [
  {
    title: "Crime Boss: Rockay City",
    poster: "assets/crime-boss-poster.jpg",
    backdrop: "assets/crime-boss-backdrop.jpg",
    description:
      "Crime Boss: Rockay City is an organized crime game combining first-person shooter action and turf wars, playable solo or with friends. Take on the role of Travis Baker – a man with his sights set on becoming the new King of Rockay City, one crime at a time…",
  },
  {
    title: "Grand Theft Auto V",
    poster: "assets/gta-v-poster.jpg",
    backdrop: "assets/gta-v-backdrop.jpg",
    description:
      "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
  },
  {
    title: "Hogwarts Legacy",
    poster: "assets/hogwarts-legacy-poster.jpg",
    backdrop: "assets/hogwarts-legacy-backdrop.jpg",
    description: "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
  },
  {
    title: "Red Dead Redemption 2",
    poster: "assets/rdr-poster.jpg",
    backdrop: "assets/rdr-backdrop.jpg",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online",
  },
  {
    title: "The Last of Us™ Part I",
    poster: "assets/tlou-poster.jpg",
    backdrop: "assets/tlou-backdrop.jpg",
    description: "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.",
  },
];

const gameList = document.body.querySelector(".game-list");

const gameTitle = document.body.querySelector(".title");
const gameDescription = document.body.querySelector(".description");
const gameBackdrop = document.body.querySelector(".backdrop-img");

const gameListItems = document.body.querySelectorAll(".game-list-item");

for (i = 0; i < gameListItems.length; i++) {
  // Change "click" to "mouseover" to change the image and details on hover

  gameListItems[i].addEventListener("click", function () {
    gameTitle.innerText = gamesList[this.id].title;
    gameDescription.innerText = gamesList[this.id].description;
    gameBackdrop.src = gamesList[this.id].backdrop;
  });
}
