function fetchPopulation(pop) {
  alert(pop);
}

async function Countries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log('data', data);
      const Container = document.getElementById("countryContainer");
      const Template = document.getElementById("cardTemplate");
  
      data.forEach((country) => {
        const card = Template.content.cloneNode(true);
  
        card.querySelector(".card-header").textContent = country.name.common;
        card.querySelector(".card-img-top").src = country.flags.svg;
        card.querySelector(".card-text").textContent +=
          "  " + country.capital;
        card.querySelector(".btn").addEventListener("click", () => {
          fetchPopulation(country.population);
        });
  
        Container.appendChild(card);
      });
    } 
  catch (error) {
      console.log(error);
    }
  }
  Countries();
  