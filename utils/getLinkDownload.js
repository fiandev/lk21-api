import jsdom from "jsdom";
import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
const { JSDOM } = jsdom;

const getLinkDownload = ({ htmlCode }) => {
  const { window } = new JSDOM(htmlCode);
  const container = window.document.querySelector("#results")
  const tables = container.querySelectorAll(".table-responsive table")
  let result = [];
  
  tables.forEach((table, i) => {
    let dataTable = []
    let [header] = table.tHead.rows
    let props = [...header.cells].map(h => h.textContent)
    let rows = [...table.rows].map(r => {
      const entries = [...r.cells].map((c, i) => {
        return [props[i], c.textContent]
      })
      return Object.fromEntries(entries)
    })
    result.push(rows)
  })
  /* return */
  return { result };
};

export default getLinkDownload;
