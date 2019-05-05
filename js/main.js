function elementById(id) {
  return document.getElementById(id);
}
function setVisible(id) {
  elementById(id).className = "visible";
}
function setInvisible(id) {
  elementById(id).className = "invisible";
}
let username = localStorage.getItem("username");
let proizvodi = JSON.parse(localStorage.getItem("products"));
let allUsers = JSON.parse(localStorage.getItem("users"));
