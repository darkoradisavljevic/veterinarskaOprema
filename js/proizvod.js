let proizvodi = JSON.parse(localStorage.getItem("proizvodi"));
let pr = proizvodi.find(p => p.id === parseInt(id[1]));
let prDiv = document.createElement("div");
prDiv.setAttribute("class", "product-img");
prDiv.innerHTML = `<img src=${pr.img} alt=${pr.name}>`;
document.getElementById("product-image").appendChild(prDiv);

let descriptionDiv = document.createElement("div");
descriptionDiv.setAttribute("class", "product-desc");
descriptionDiv.innerHTML = pr.description;
document.getElementById("product-description").appendChild(descriptionDiv);
