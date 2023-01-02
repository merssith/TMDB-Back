const homeService = require("../services/homeService");

const carousel = [
  {
    title: "Avengers I",
    image:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/avengers-character-poster-banner-slice.jpg",
    content:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    active: true,
    position: 1,
  },
  {
    title: "Harry Potter I",
    image:
      "https://media.revistagq.com/photos/61bb3b6b36216799ec22c162/16:9/w_2560%2Cc_limit/harry-potter-hbo-max.jpeg",
    content:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    active: true,
    position: 2,
  },
  {
    title: "The Lord Of The Rings II",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c4f9c40f8370a0dd9949a42/1601289253050-USME0LFCHVM1I39QGMMY/banner.jpg",
    content:
      "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    active: true,
    position: 3,
  },
  {
    title: "Example",
    image: "www.google.com",
    content: "Some banner description",
    active: false,
  },
  {
    title: "Another Example",
    image: "www.google.com",
    content: "Another banner description",
    active: false,
  },
  {
    title: "More Examples",
    image: "www.google.com",
    content: "More banner description",
    active: false,
  },
];

async function createCarousel() {
  for (let i = 0; i < carousel.length; i++) {
    let carouselSlides = carousel[i];
    await homeService.newCarouselSlide(carouselSlides);
  }
  console.log("CAROUSEL created");
}

module.exports = createCarousel;
