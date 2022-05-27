import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieDetail = window.document.querySelector("#movie-detail .row");
  const details = movieDetail.querySelectorAll(".content *")
  let totalPages = 1;
  let result = {};
  
  details.forEach((detail) => {
    /* sipnosis */
    if (detail.querySelector("h2") == null){
      let key = detail.querySelector("strong").textContent
      let value = detail.querySelector("h3").textContent
      result[key] = value
      return { result, totalPages };
    }
    /* lainnya */
    let key = detail.querySelector("h2").textContent
    let value = ""
    if (detail.querySelector("h3") == null){
      value = detail.querySelector("time").textContent
    } else {
      value = detail.querySelector("h3").textContent
    }
    
    result[key] = value
    //console.log(result[key]);
  });
  return { result, totalPages };
};

export default getDetailMovie;
