if (JSON.parse(localStorage.getItem("isLogin")) === true) {
  let username = localStorage.getItem("username");
  let loggedUser = JSON.parse(localStorage.getItem("users")).find(
    user => user[0].username === username
  );

  const pocetna = document.getElementById("homepage");
  const siteLogo = document.getElementById("site-logo");
  siteLogo.setAttribute("href", "pocetna.html");
  pocetna.setAttribute("href", "pocetna.html");
  document.getElementById("logged-user").className = "visible";
  document.getElementById("menu-item-user").innerHTML =
    loggedUser[0].username;
  document.getElementById("fullname").innerHTML = `${loggedUser[0].name} ${
    loggedUser[0].surname
  }`;
  document.getElementById("profile-username").innerHTML =
    loggedUser[0].username;
  document.getElementById("profile-email").innerHTML = loggedUser[0].email;
  if (loggedUser[0].companyName) {
    document.getElementById("company-visible").className = "visible";
    document.getElementById("profile-company").innerHTML =
      loggedUser[0].companyName;
  }
} else {
  const pocetna = document.getElementById("homepage");
  const siteLogo = document.getElementById("site-logo");
  siteLogo.setAttribute("href", "index.html");
  pocetna.setAttribute("href", "index.html");
  document.getElementById("logged-user").className = "invisible";
  document.getElementById("menu-item-user").innerHTML = "";
}

function logout() {
  localStorage.setItem("isLogin", false);
  localStorage.removeItem("username");
  document.location.replace("index.html");
}
