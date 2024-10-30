const baseURL = "https://happylomas.github.io/wdd230/";
const linksURL = "https://happylomas.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data)
  }
  


  displayLinks(data) {
    cons weeks
    console.log(weeks);
  }
  getLinks();