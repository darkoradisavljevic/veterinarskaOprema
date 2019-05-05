let proizvodi = JSON.parse(localStorage.getItem("products"));
let pr = proizvodi.find(p => p.id === parseInt(id[1]));
let prDiv = document.createElement("div");
prDiv.setAttribute("class", "product-img");
prDiv.innerHTML = `<img src=${pr.img} alt=${pr.name}>`;
document.getElementById("product-image").appendChild(prDiv);

let descriptionDiv = document.createElement("div");
descriptionDiv.setAttribute("class", "product-desc");
descriptionDiv.innerHTML = pr.description;
document.getElementById("product-description").appendChild(descriptionDiv);

if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  document.getElementById("logged").className = "visible";
  document.getElementById("non-logged").className = "invisible";
} else {
  document.getElementById("non-logged").className = "visible";
  document.getElementById("logged").className = "invisible";
}

document.getElementById("product-name").innerHTML = prod.find(
  p => p.id === parseInt(id[1])
).name;

document.getElementById("ascFor").innerHTML = prod.find(
  p => p.id === parseInt(id[1])
).name;
