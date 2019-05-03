if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  const pocetna = document.getElementById("pocetna");
  pocetna.setAttribute("href", "pocetna.html");
  document.getElementById("menu-item-user").innerHTML = localStorage.getItem(
    "korisnickoIme"
  );
} else {
  const pocetna = document.getElementById("pocetna");
  pocetna.setAttribute("href", "index.html");
  document.getElementById("menu-item-user").innerHTML = "";
}

function logout() {
  localStorage.setItem("isLogin", false);
  document.location.replace("index.html");
}
