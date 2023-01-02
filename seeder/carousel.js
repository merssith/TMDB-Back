const homeService = require("../services/homeService");

const carousel = [
  {
    movieId: 299534,
    active: true,
    position: 1,
  },
  {
    movieId: 671,
    active: true,
    position: 2,
  },
  {
    movieId: 121,
    active: true,
    position: 3,
  },
  {
    tvShowId: 1418,
    active: true,
    position: 4,
  },
  {
    tvShowId: 2316,
    active: false,
  },
  {
    title: "Newsletter banner",
    image:
      "https://www.devservice.es/wp-content/uploads/2017/01/email-newsletter.jpg",
    content: "Subscribe to our newsletter!!!",
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
