import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieCards = window.document.querySelectorAll(".post .content .content-wrapper .row .content div");
  let totalPages = 1;
  let result = [];
  let movie = {};
  movieCards.forEach((detail) => {
    let key = detail.querySelector("h2").textContent
    let value = detail.querySelector("h3").textContent
    movie[key] = value
  });
  result.push(movie);

  return { result, totalPages };
};

export default getDetailMovie;
