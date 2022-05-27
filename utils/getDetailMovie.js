import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieCards = window.document.querySelectorAll(".post .content .content-wrapper .row .content div");
  let totalPages = 1;
  let result = {};
  movieCards.forEach((detail) => {
    let key = detail.querySelector("h2").textContent
    let value = detail.querySelector("h3").textContent
    result[key] = value
    console.log(result[key]);
  });
  return { result, totalPages };
};

export default getDetailMovie;
