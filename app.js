"use strict";

const form = document.querySelector("form");

const fullnameInp = document.getElementById("fullName");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");

const fullnameError = document.querySelector("#fullName + p.error");
const emailError = document.querySelector("#email + p.error");
const passwordError = document.querySelector("#password + p.error");

//Minimum eight characters, at least one letter, one number and one special character:
const passwordConstraint = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i
);

//form
form.addEventListener("submit", (e) => {});

// full name
fullnameInp.addEventListener("input", (event) => {
  if (fullnameInp.validity.valueMissing) {
    fullnameInp.setCustomValidity("Nameless people not allowed on our site");
    fullnameError.textContent = "Full name is missing";
  } else if (fullnameInp.validity.tooShort) {
    fullnameInp.setCustomValidity(
      "Lengthen the full name  to 2 letters or more"
    );
    fullnameError.textContent = "Full name should have at least two letters";
  } else if (fullnameInp.validity.typeMismatch) {
    fullnameInp.setCustomValidity("We only  accept valid names");
    fullnameError.textContent = "Full name is invalid";
  } else {
    fullnameInp.setCustomValidity("");
    fullnameError.textContent = "";
  }
});

// email
emailInp.addEventListener("input", (event) => {
  if (emailInp.validity.valueMissing) {
    emailInp.setCustomValidity("Please add an email");
    emailError.textContent = "Email is missing";
  } else if (emailInp.validity.typeMismatch) {
    emailInp.setCustomValidity("We only  accept valid email addresses");
    emailError.textContent = "Email is invalid";
  } else {
    emailInp.setCustomValidity("");
    emailError.textContent = "";
  }
});

// password
passwordInp.addEventListener("input", (event) => {
  if (passwordInp.validity.valueMissing) {
    passwordInp.setCustomValidity("Please add a password");
    passwordError.textContent = "Password is missing";
  } else if (passwordInp.validity.tooShort) {
    passwordInp.setCustomValidity(
      "Lengthen the password  to 8 characters or more"
    );
    passwordError.textContent = "Password is too short";
  } else if (!passwordConstraint.test(passwordInp.value)) {
    passwordInp.setCustomValidity(
      "Add a number, a special character or letter to the password"
    );
    passwordError.textContent =
      "Password should have at least one number, and one special character";
  } else {
    passwordInp.setCustomValidity("");
    passwordError.textContent = "";
  }
});
