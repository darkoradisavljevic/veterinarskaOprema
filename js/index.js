// login forma po defaultu treba da bude vidljiva
setVisible("loginForm");

// funkcija koja zamenjuje login formu registracionom formom.
function switchForms(event, eventToShow, eventToHide) {
  event.preventDefault();
  setVisible(eventToShow);
  setInvisible(eventToHide);
}
elementById("registration").addEventListener("click", registration);

// Registracija korisnika
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

// Validacija forme za registraciju
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
        setVisible("err-" + getForm[i].id);
      }
    }
  }
  validateEmail(elementById("my-email").value);
  //ako postoji bar uslov koji nije ispunjen ne dozvoli da se registruje
  if (errors.length > 0) {
    return false;
  }

  //Ako korisničko ime već postoji ne dozvoli registraciju
  if (allUsers && allUsers.find(user => user[0].username === username)) {
    setVisible("err-username-exist");
    elementById("err-username-exist").innerHTML = "Korisničko ime već postoji!";
    return false;
  }
  //ako su lozinke razlicite ili imaju manje od 8 karaktera uslov nije ispunjen
  if (password !== password1 || password.length < 8) {
    setVisible("err-passDif");
    return false;
  } else {
    setInvisible("err-passDif");
    return true;
  }
}

// Validacija email-a
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    elementById("validate-email").innerHTML = "Email nije validan!";
    setVisible("validate-email");
    return false;
  } else {
    return true;
  }
}

// Poruke da polja nisu popunjena se uklanjaju na okidanje onkeyup event-a
function clearErrorMsg(id) {
  setInvisible("err-" + id);
  setInvisible("err-passDif");
  setInvisible("validate-email");
  setInvisible("err-username-exist");
}

// Čuvanje korisnika posle registracije u local storage
function save(name, surname, username, companyName, email, password) {
  if (!validation("formRegistration")) {
    return false;
  }
  let users = allUsers || [];
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
}
elementById("login").addEventListener("click", login);

// Logovanje korisnika
function login(event) {
  event.preventDefault();

  const userUsername = elementById("userUsername").value;
  localStorage.setItem("username", userUsername);
  const passwordUsera = elementById("passwordUsera").value;

  const registeredUsername = allUsers.find(
    user => user[0].username === userUsername
  );

  // Ako je korisnik registrovan i ako se username i password poklapaju sa unetim uloguj korisnika
  if (
    registeredUsername &&
    (userUsername === registeredUsername[0].username &&
      passwordUsera === registeredUsername[0].password)
  ) {
    localStorage.setItem("isLogin", true);
    document.location.replace("pocetna.html");
  } else {
    setVisible("alert-danger-id");
    document.getElementsByClassName("alert-danger").value;
  }
}
