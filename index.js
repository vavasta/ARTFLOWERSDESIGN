const firstname = document.getElementById(firstname);
const lastname = document.getElementById(lastname);
const email = document.getElementById(email);
const telephone = document.getElementById(telephone);

function InputValidation() {
  const x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("PNES");
    return false;
  }
}
