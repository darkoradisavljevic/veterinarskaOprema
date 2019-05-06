let loggedUser = allUsers.find(user => user[0].username === username);

let pr = proizvodi.find(p => p.id === parseInt(id[1]));
let prDiv = document.createElement("div");
prDiv.setAttribute("class", "product-img");
prDiv.innerHTML = `<img src=${pr.img} alt=${pr.name}>`;
elementById("product-image").appendChild(prDiv);

let descriptionDiv = document.createElement("div");
descriptionDiv.setAttribute("class", "product-desc");
descriptionDiv.innerHTML = pr.description;
elementById("product-description").appendChild(descriptionDiv);

if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  setVisible("logged");
  setInvisible("non-logged");
  // default-ne vrednosti za email i ime, uzeto iz objekta ulogovanog user-a u localStorage-u
  elementById("user-name").setAttribute(
    "value",
    `${loggedUser[0].name} ${loggedUser[0].surname}`
  );
  elementById("user-email").setAttribute("value", loggedUser[0].email);
} else {
  setVisible("non-logged");
  setInvisible("logged");
  setInvisible("btn-message-sent");
}

elementById("product-name").innerHTML = prod.find(
  p => p.id === parseInt(id[1])
).name;

elementById("ascFor").innerHTML = prod.find(p => p.id === parseInt(id[1])).name;
