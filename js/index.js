function elementById(id) {
  return document.getElementById(id);
}
elementById("loginForm").className = "visible";

function switchForms(event, eventToShow, eventToHide) {
  event.preventDefault();
  elementById(eventToShow).className = "visible";
  elementById(eventToHide).className = "invisible";
}
elementById("registration").addEventListener("click", registration);

function registration(event) {
  event.preventDefault();

  const ime = elementById("ime").value;
  const prezime = elementById("prezime").value;
  const korisnickoIme = elementById("korisnickoIme").value;
  const imeFirme = elementById("imeFirme").value;
  const email = elementById("email").value;
  const password = elementById("password").value;
  const password1 = elementById("password1").value;
  const isLogin = false;

  save(ime, prezime, korisnickoIme, imeFirme, email, password);
}

function validation(form) {
  const password = elementById("password").value;
  const password1 = elementById("password1").value;
  let getForm = elementById(form).getElementsByTagName("input");
  let errors = [];
  for (let i = 0; i < getForm.length; i++) {
    if (getForm[i].value === "") {
      if (elementById("err-" + getForm[i].id)) {
        errors.push(elementById("err-" + getForm[i].id));
        elementById("err-" + getForm[i].id).className = "visible";
      }
    }
  }
  validateEmail(elementById("email").value);

  if (errors.length > 0) {
    return false;
  }

  if (password !== password1) {
    elementById("err-passDif").className = "visible";
    return false;
  } else {
    elementById("err-passDif").className = "invisible";
    return true;
  }
}
// function validatePassword(password) {
//   if (password.length < 7) {
//     elementById("validate-password").innerHTML =
//       "Lozinka mora da ima minimum 8 karaktera!";
//     elementById("validate-password").className = "visible";
//     return false;
//   }
// }

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    elementById("validate-email").innerHTML = "Email nije validan!";
    elementById("validate-email").className = "visible";
    return false;
  }
}

function clearErrorMsg(id) {
  elementById("err-" + id).className = "invisible";
  elementById("err-passDif").className = "invisible";
  // elementById("validate-" + id).className = "invisible";
}

function save(ime, prezime, korisnickoIme, imeFirme, email, password) {
  if (!validation("formRegistration")) {
    return false;
  }

  if (localStorage.getItem("korisnickoIme") === korisnickoIme) {
    alert(`Korisnik sa korisničkim imenom ${korisnickoIme} postoji!`);
  } else {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userData = [
      {
        ime: ime,
        prezime: prezime,
        korisnickoIme: korisnickoIme,
        imeFirme: imeFirme,
        email: email,
        password: password
      }
    ];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLogin", true);
    localStorage.setItem("korisnickoIme", korisnickoIme);

    document.location.replace("pocetna.html");
  }
}
document.getElementById("login").addEventListener("click", login);

function login(event) {
  event.preventDefault();

  const korisnickoImeUsera = document.getElementById("korisnickoImeUsera")
    .value;
  localStorage.setItem("korisnickoIme", korisnickoImeUsera);

  const passwordUsera = document.getElementById("passwordUsera").value;

  const users = JSON.parse(localStorage.getItem("users"));
  const registeredUsername = users.find(
    user => user[0].korisnickoIme === korisnickoImeUsera
  )[0].korisnickoIme;
  const registeredPassword = users.find(
    user => user[0].korisnickoIme === korisnickoImeUsera
  )[0].password;

  if (
    korisnickoImeUsera === registeredUsername &&
    passwordUsera === registeredPassword
  ) {
    localStorage.setItem("isLogin", true);
    document.location.replace("pocetna.html");
  } else {
    elementById("alert-danger-id").className = "visible";
    document.getElementsByClassName("alert-danger").value;
  }
}
