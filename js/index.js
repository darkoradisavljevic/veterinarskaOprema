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

  const name = elementById("name").value;
  const surname = elementById("surname").value;
  const username = elementById("username").value;
  const companyName = elementById("companyName").value;
  const email = elementById("my-email").value;
  const password = elementById("password").value;

  save(name, surname, username, companyName, email, password);
}

function validation(form) {
  const password = elementById("password").value;
  const password1 = elementById("password1").value;
  const username = elementById("username").value;
  let getForm = elementById(form).getElementsByTagName("input");
  let errors = [];
  for (let i = 0; i < getForm.length; i++) {
    if (getForm[i].value === "") {
      if (elementById("err-" + getForm[i].id)) {
        errors.push(elementById("err-" + getForm[i].id));
        elementById("err-" + getForm[i].id).innerHTML =
          getForm[i].name + " je obavezno polje!";
        elementById("err-" + getForm[i].id).className = "visible";
      }
    }
  }
  validateEmail(elementById("my-email").value);
  //ako postoji bar uslov koji nije ispunjen ne dozvoli da se registruje
  if (errors.length > 0) {
    return false;
  }

  //Ako korisničko ime već postoji ne dozvoli registraciju
  if (
    JSON.parse(localStorage.getItem("users")) &&
    JSON.parse(localStorage.getItem("users")).find(
      user => user[0].username === username
    )
  ) {
    elementById("err-username-exist").className = "visible";
    elementById("err-username-exist").innerHTML = "Korisničko ime već postoji!";
    return false;
  }
  //ako su lozinke razlicite ili imaju manje od 8 karaktera uslov nije ispunjen
  if (password !== password1 || password.length < 7) {
    elementById("err-passDif").className = "visible";
    return false;
  } else {
    elementById("err-passDif").className = "invisible";
    return true;
  }
}

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    elementById("validate-email").innerHTML = "Email nije validan!";
    elementById("validate-email").className = "visible";
    return false;
  } else {
    return true;
  }
}

function clearErrorMsg(id) {
  elementById("err-" + id).className = "invisible";
  elementById("err-passDif").className = "invisible";
  elementById("validate-email").className = "invisible";
  elementById("err-username-exist").className = "invisible";
}

function save(name, surname, username, companyName, email, password) {
  if (!validation("formRegistration")) {
    return false;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userData = [
    {
      name: name,
      surname: surname,
      username: username,
      companyName: companyName,
      email: email,
      password: password
    }
  ];
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("isLogin", true);
  localStorage.setItem("username", username);

  document.location.replace("pocetna.html");
  // }
}
document.getElementById("login").addEventListener("click", login);

function login(event) {
  event.preventDefault();

  const userUsername = document.getElementById("userUsername")
    .value;
  localStorage.setItem("username", userUsername);

  const passwordUsera = document.getElementById("passwordUsera").value;

  const users = JSON.parse(localStorage.getItem("users"));
  const registeredUsername = users.find(
    user => user[0].username === userUsername
  )[0].username;
  const registeredPassword = users.find(
    user => user[0].username === userUsername
  )[0].password;

  if (
    userUsername === registeredUsername &&
    passwordUsera === registeredPassword
  ) {
    localStorage.setItem("isLogin", true);
    document.location.replace("pocetna.html");
  } else {
    elementById("alert-danger-id").className = "visible";
    document.getElementsByClassName("alert-danger").value;
  }
}
