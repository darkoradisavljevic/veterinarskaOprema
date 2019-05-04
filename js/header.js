if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  let korisnickoIme = localStorage.getItem("korisnickoIme");
  let loggedUser = JSON.parse(localStorage.getItem("users")).find(
    user => user[0].korisnickoIme === korisnickoIme
  );
  
  const pocetna = document.getElementById("pocetna");
  pocetna.setAttribute("href", "pocetna.html");
  document.getElementById("logged-user").className = "visible";
  document.getElementById("menu-item-user").innerHTML =
    loggedUser[0].korisnickoIme;
} else {
  const pocetna = document.getElementById("pocetna");
  pocetna.setAttribute("href", "index.html");
  document.getElementById("logged-user").className = "invisible";
  document.getElementById("menu-item-user").innerHTML = "";
}

function logout() {
  localStorage.setItem("isLogin", false);
  localStorage.removeItem("korisnickoIme");
  document.location.replace("index.html");
}
