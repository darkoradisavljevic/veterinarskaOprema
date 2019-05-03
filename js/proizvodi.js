let proizvodi = JSON.parse(localStorage.getItem("proizvodi"));
proizvodi.map(proizvod => {
  let proizvodDiv = document.createElement("div");
  proizvodDiv.setAttribute("class", "card product-card col-md-4");
  proizvodDiv.innerHTML = `
    <img class="card-img-top" src=${proizvod.img} alt=${
    proizvod.name
  } style="width:100%">
    <div class="card-body">
        <h4 class="card-title">${proizvod.name}</h4>
        <a href="proizvod.html?id=${proizvod.id}" class="btn btn-primary">Detaljnije</a>
      </div>
      `;
  document.getElementById("all-products").appendChild(proizvodDiv);
});
