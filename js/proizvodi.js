let proizvodi = JSON.parse(localStorage.getItem("products"));
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
  document.getElementById("all-products").appendChild(proizvodDiv);
});
function searchProducts() {
  let input, allProducts, div, h4, i, productValue, noProducts;
  input = document.getElementById("search-product").value.toUpperCase();
  allProducts = document.getElementById("all-products");
  div = allProducts.getElementsByClassName("product-card");
  noProducts = document.getElementById("no-products");
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
