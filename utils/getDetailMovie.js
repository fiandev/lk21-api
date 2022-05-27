import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieCards = window.document.querySelector("#movie-detail .content");
  let totalPages = 1;
  let result = [];
  let movie = {};
  const kualitas = movieCards[0].querySelector("h3").textContent
  const negara = movieCards[1].querySelector("h3").textContent
  movieCards.forEach((detail) => {
    let key = detail.querySelector("h2").textContent
    let value = detail.querySelector("h3").textContent
    movie[key] = value
  });
  result.push(movie);

  return { result, totalPages };
};

export default getDetailMovie;
