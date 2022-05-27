import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieDetail = window.document.querySelector("#movie-detail .row");
  const details = movieDetail.querySelectorAll(".content div")
  let totalPages = 1;
  let result = {};
  details.forEach((detail) => {
    let key = detail.querySelector("h2").textContent || "none"
    let value = detail.querySelector("h3").textContent || "none"
    result[key] = value
    console.log(result[key]);
  });
  return { result, totalPages };
};

export default getDetailMovie;
