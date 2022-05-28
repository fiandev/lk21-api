import jsdom from "jsdom";
import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
const { JSDOM } = jsdom;

const getLinkDownload = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  let result = [];
  const container = window.document.queryselector("#results")
  const tables = container.querySelectorAll(".table-responsive table")
  
  tables.forEach(table => {
    const jsonTable = new HtmlTableToJson(table);
    result.push(jsonTable)
  })
  
  /* return */
  return { result };
};

export default getLinkDownload;
