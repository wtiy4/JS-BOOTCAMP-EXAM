let myApi = "https://restcountries.com/v3.1/all";
let display = document.getElementById("display");
let show = document.getElementById("show");
let box = document.getElementById("box");

async function showData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();
  console.log(data);

  data.forEach((item) => {
    let container = document.createElement("div");
    let imgName = document.createElement("img");
    imgName.alt = `flag of country`;
    let text = document.createElement("h3");
    let official = document.createElement("p");
    let population = document.createElement("span");
    population.innerText = ` Population: ${item.population}`;
    let region = document.createElement("p");
    let languages = document.createElement("p");
    languages.innerText = `Language: ${item.languages}`;
    let cordinate = document.createElement("h6");
    cordinate.innerText = ` Cordinates: ${item.maps.googleMaps}`;
    region.innerText = ` Region is: ${item.region}`;
    official.innerText = item.name.official;
    text.innerText = item.name.common;
    imgName.src = item.flags.png;
    imgName.style.width = "200px";

    document.body.appendChild(container);
    box.appendChild(container);
    container.appendChild(imgName);
    container.appendChild(text);
    container.appendChild(official);
    container.appendChild(population);
    container.appendChild(region);
    container.appendChild(languages);
    container.appendChild(cordinate);
  });
}

showData();
