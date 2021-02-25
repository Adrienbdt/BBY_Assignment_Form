"use strict";

/* MOBILE TOP MENU NAVIGATION - MOBILE */
const mobMenu = document.querySelector(".header__mobile-menu");
const header = document.querySelector("header");

// Top left menu opening for mobile devices
document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("header__hamburger") ||
    evt.target.classList.contains("hamb")
  ) {
    mobMenu.classList.replace(
      "header__mobile-menu",
      "header__mobile-menu-active"
    );
    header.classList.add("open");
  } else {
    mobMenu.classList.replace(
      "header__mobile-menu-active",
      "header__mobile-menu"
    );
    header.classList.remove("open");
  }
});

/* FOOTER COLLAPSIBLE SECTIONS - MOBILE */
const acc = document.getElementsByClassName("foot_sec_title");
let i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    console.log(panel.className);
    if (panel.classList.contains("wrapper")) {
      panel.classList.toggle("active");
    }
  });
}

/* PREORDER FORM VALIDATION - ALL */
const form = document.getElementById("element");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const checkBox = document.getElementById("agreement");
const conf = document.getElementById("confirmation");
const confMessage = document.getElementById("confMessage");

let validation = false;
let firstNameFinal = "";
let emailFinal = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  if (validation) {
    form.style.display = "none";
    conf.style.display = "flex";
  }
  confMessage.innerHTML = `<p>You have successfully signed up ${firstNameFinal}!</p>
  <p>We will get in touch with you at ${emailFinal} as soon as your system is available</p>`;
});

const validateForm = () => {
  let firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const nameRegEx = /^[A-Za-z]+$/;
  const firstNameResult = nameRegEx.test(firstNameValue);
  const lastNameResult = nameRegEx.test(lastNameValue);
  const phoneRegEx = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  const phoneResult = phoneRegEx.test(phoneValue);
  const emailRegEx = /\S+@\S+\.\S+/;
  const emailResult = emailRegEx.test(emailValue);
  let fNameValid = false;
  let lNameValid = false;
  let emailValid = false;
  let phoneValid = true;
  let checkBoxValid = false;

  if (firstNameValue === "") {
    setError(firstName, `Please indicate a first name`);
    firstName.focus();
    return false;
  } else if (!firstNameResult) {
    setError(
      firstName,
      `Please enter a valid first name (no digits or special characters allowed)`
    );
    firstName.focus();
    return false;
  } else {
    setSuccess(firstName);
    fNameValid = true;
  }

  if (lastNameValue === "") {
    setError(lastName, `Please enter a last name`);
    lastName.focus();
    return false;
  } else if (!lastNameResult) {
    setError(
      lastName,
      `Please enter a valid last name (no digits or special characters allowed)`
    );
    lastName.focus();
  } else {
    setSuccess(lastName);
    lNameValid = true;
  }

  if (emailValue === "" || !emailResult) {
    setError(email, `Please enter a valid email address`);
    email.focus();
    return false;
  } else {
    setSuccess(email);
    emailValid = true;
  }

  if (phoneValue === "") {
    setSuccess(phone);
  } else if (!phoneResult) {
    setError(phone, `Please enter a valid 10 digits phone number`);
    phone.focus();
    phoneValid = false;
    return false;
  } else {
    setSuccess(phone);
  }

  if (!checkBox.checked) {
    setErrorTerms(
      checkBox,
      `Please validate the conditions above in order to subscribe`
    );
    return false;
  } else {
    setSuccessTerms(checkBox);
    checkBoxValid = true;
  }

  if (fNameValid && lNameValid && emailValid && phoneValid & checkBoxValid) {
    validation = true;
  }
  firstNameFinal = firstNameValue;
  emailFinal = emailValue;
};

const setError = (input, message) => {
  const formSection = input.parentElement;
  const small = formSection.querySelector("small");
  small.innerText = message;
  formSection.className = "form__section error";
};

const setSuccess = (input) => {
  const formSection = input.parentElement;
  formSection.className = "form__section success";
};

const setSuccessTerms = (input) => {
  const formSection = input.parentElement;
  formSection.className = "form__section_terms success";
};

const setErrorTerms = (input, message) => {
  const formSection = input.parentElement;
  const small = formSection.querySelector("small");
  small.innerText = message;
  formSection.className = "form__section_terms error";
};

const checkForStringOnly = (input) => {
  const matches = input.match(/\d+/g);
  if (matches != null) {
    return false;
  }
};
