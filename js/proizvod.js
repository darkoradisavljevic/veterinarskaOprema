let username = localStorage.getItem("username");
let loggedUser = JSON.parse(localStorage.getItem("users")).find(
  user => user[0].username === username
);
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

// default-ne vrednosti za email i ime, uzeto iz objekta ulogovanog user-a u localStorage-u
document
  .getElementById("user-name")
  .setAttribute("value", `${loggedUser[0].name} ${loggedUser[0].surname}`);
document
  .getElementById("user-email")
  .setAttribute("value", loggedUser[0].email);

document.getElementById("product-name").innerHTML = prod.find(
  p => p.id === parseInt(id[1])
).name;

document.getElementById("ascFor").innerHTML = prod.find(
  p => p.id === parseInt(id[1])
).name;
