// Uzimam sve proizvode iz local storage-a i prikazujem ih na strani proizvodi
// Linkovanje proizvoda na njegovu detaljnu stranu preko id-ja
// koji se prosleđuje kao get parametar
proizvodi.map(proizvod => {
  let proizvodDiv = document.createElement("div");
  proizvodDiv.setAttribute("class", "card product-card col-md-3");
  proizvodDiv.innerHTML = `
    <img class="card-img-top" src=${proizvod.img} alt=${
    proizvod.name
  } style="width:100%">
    <div class="card-body">
        <h4 class="card-title">${proizvod.name}</h4>
        <a href="proizvod.html?id=${
          proizvod.id
        }" class="btn btn-primary">Detaljnije</a>
      </div>
      `;
  elementById("all-products").appendChild(proizvodDiv);
});

// Pretraga proizvoda iz liste proizvoda po imenu
function searchProducts() {
  let input, allProducts, div, h4, i, productValue;
  input = elementById("search-product").value.toUpperCase();
  allProducts = elementById("all-products");
  div = allProducts.getElementsByClassName("product-card");
  for (i = 0; i < div.length; i++) {
    h4 = div[i].getElementsByTagName("h4")[0];
    productValue = h4.textContent || h4.innerText;
    if (productValue.toUpperCase().indexOf(input) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
