// Skraćeni zapis funkcije
function elementById(id) {
  return document.getElementById(id);
}

// Prikazi elemente koji su imali klasu "invisible"
function setVisible(id) {
  elementById(id).className = "visible";
}
// Suprotno funkciji setVisible
function setInvisible(id) {
  elementById(id).className = "invisible";
}
// Ulogovani korisnik
let username = localStorage.getItem("username");
// Svi proizvodi iz local storage-a
let proizvodi = JSON.parse(localStorage.getItem("products")) || [];
// Svi korisnici koji su registrovani
let allUsers = JSON.parse(localStorage.getItem("users")) || [];
