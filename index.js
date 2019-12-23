const firstname = document.getElementById("firstname");
const firstnameerror = document.getElementById("firstname__error");
const lastname = document.getElementById("lastname");
const lastnameerror = document.getElementById("lastname__error");
const email = document.getElementById("email");
const emailerror = document.getElementById("email__error");
const telephone = document.getElementById("telephone");
const telephoneerror = document.getElementById("telephone__error");
const text = document.getElementById("text");
const texterror = document.getElementById("text__error");
const form = document.querySelector("form");
const error = document.getElementById("bottomerror");
const fielderror = document.getElementById("form__required");
////

form.addEventListener("submit", ValidationEvent);

function ValidationEvent(e) {
  e.preventDefault();
  FirstNameValidation(e);
  LastNameValidation(e);
  EmailValidation(e);
  TelephoneValidation(e);
  TextValidation(e);
}

function FirstNameValidation(e) {
  e.preventDefault();
  if (firstname.value == "") {
    firstnameerror.style.display = "block";
  } else {
    firstnameerror.style.display = "none";
    firstname.value = "";
  }
}

function LastNameValidation(e) {
  e.preventDefault();
  if (lastname.value == "") {
    lastnameerror.style.display = "block";
  } else {
    lastnameerror.style.display = "none";
    lastname.value = "";
  }
}
function EmailValidation(e) {
  e.preventDefault();
  if (email.value == "") {
    emailerror.style.display = "block";
  } else {
    emailerror.style.display = "none";
    email.value = "";
  }
}
function TelephoneValidation(e) {
  e.preventDefault();
  if (telephone.value == "") {
    telephoneerror.style.display = "block";
  } else {
    telephoneerror.style.display = "none";
    telephone.value = "";
  }
}
function TextValidation(e) {
  e.preventDefault();
  if (text.value == "") {
    texterror.style.display = "block";
  } else {
    texterror.style.display = "none";
    text.value = "";
  }
}
