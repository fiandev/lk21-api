import jsdom from "jsdom";
import axios from "axios";
const { JSDOM } = jsdom;

const getDetailMovie = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const movieDetail = window.document.querySelector("#movie-detail .row");
  const poster = movieDetail.querySelector(".content-poster")
  const figure = poster.querySelector("figure")
  const details = movieDetail.querySelectorAll(".content div")
  const blockquote = movieDetail.querySelector(".content blockquote")
  const dlMovie = movieDetail.querySelector("#download-movie")
  const loadPlayer = movieDetail.querySelector("#loadPlayer")
  let totalPages = 1;
  let result = {};
  
  details.forEach((detail) => {
    if (detail.querySelector("h2") == null) {
      return false
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
  /* sinopsis dan judul */
  let sinopsis = blockquote.querySelector("p").textContent
  let title = blockquote.querySelector("h3").textContent
  result["Sinopsis"] = sinopsis
  result["Title"] = title
  /* thumbnail */
  let thumbnail = figure.querySelector("img").getAttribute("src")
  result["Thumbnail"] = thumbnail
  /* link download */
  let linkdl = dlMovie.querySelector(".btn-success").getAttribute("href")
  result["Download"] = linkdl
  /* iframe */
  let iframe = loadPlayer.querySelector("iframe").getAttribute("src")
  result["Streaming"] = iframe
  /* return */
  return { result, totalPages };
};

export default getDetailMovie;
