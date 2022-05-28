import jsdom from "jsdom";
import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
const { JSDOM } = jsdom;

const getLinkDownload = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const container = window.document.querySelector("#results")
  const tables = container.querySelectorAll(".table-responsive table")
  let result = [];
  
  tables.forEach(table => {
    const jsonTable = new HtmlTableToJson(table);
    result.push(jsonTable)
  })
  
  /* return */
  return { result };
};

export default getLinkDownload;
