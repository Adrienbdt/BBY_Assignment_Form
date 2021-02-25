"use strict";
/* MOBILE TOP MENU NAVIGATION - MOBILE */

var mobMenu = document.querySelector(".header__mobile-menu");
var header = document.querySelector("header"); // Top left menu opening for mobile devices

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("header__hamburger") || evt.target.classList.contains("hamb")) {
    mobMenu.classList.replace("header__mobile-menu", "header__mobile-menu-active");
    header.classList.add("open");
  } else {
    mobMenu.classList.replace("header__mobile-menu-active", "header__mobile-menu");
    header.classList.remove("open");
  }
});
/* FOOTER COLLAPSIBLE SECTIONS - MOBILE */

var acc = document.getElementsByClassName("foot_sec_title");
var i;

for (var _i = 0; _i < acc.length; _i++) {
  acc[_i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    console.log(panel.className);

    if (panel.classList.contains("wrapper")) {
      panel.classList.toggle("active");
    }
  });
}
/* PREORDER FORM VALIDATION - ALL */


var form = document.getElementById("element");
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var checkBox = document.getElementById("agreement");
var conf = document.getElementById("confirmation");
var confMessage = document.getElementById("confMessage");
var validation = false;
var firstNameFinal = "";
var emailFinal = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();

  if (validation) {
    form.style.display = "none";
    conf.style.display = "flex";
  }

  confMessage.innerHTML = "<p>You have successfully signed up ".concat(firstNameFinal, "!</p>\n  <p>We will get in touch with you at ").concat(emailFinal, " as soon as your system is available</p>");
});

var validateForm = function validateForm() {
  var firstNameValue = firstName.value.trim();
  var lastNameValue = lastName.value.trim();
  var emailValue = email.value.trim();
  var phoneValue = phone.value.trim();
  var nameRegEx = /^[A-Za-z]+$/;
  var firstNameResult = nameRegEx.test(firstNameValue);
  var lastNameResult = nameRegEx.test(lastNameValue);
  var phoneRegEx = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var phoneResult = phoneRegEx.test(phoneValue);
  var emailRegEx = /\S+@\S+\.\S+/;
  var emailResult = emailRegEx.test(emailValue);
  var fNameValid = false;
  var lNameValid = false;
  var emailValid = false;
  var phoneValid = true;
  var checkBoxValid = false;

  if (firstNameValue === "") {
    setError(firstName, "Please indicate a first name");
    firstName.focus();
    return false;
  } else if (!firstNameResult) {
    setError(firstName, "Please enter a valid first name (no digits or special characters allowed)");
    firstName.focus();
    return false;
  } else {
    setSuccess(firstName);
    fNameValid = true;
  }

  if (lastNameValue === "") {
    setError(lastName, "Please enter a last name");
    lastName.focus();
    return false;
  } else if (!lastNameResult) {
    setError(lastName, "Please enter a valid last name (no digits or special characters allowed)");
    lastName.focus();
  } else {
    setSuccess(lastName);
    lNameValid = true;
  }

  if (emailValue === "" || !emailResult) {
    setError(email, "Please enter a valid email address");
    email.focus();
    return false;
  } else {
    setSuccess(email);
    emailValid = true;
  }

  if (phoneValue === "") {
    setSuccess(phone);
  } else if (!phoneResult) {
    setError(phone, "Please enter a valid 10 digits phone number");
    phone.focus();
    phoneValid = false;
    return false;
  } else {
    setSuccess(phone);
  }

  if (!checkBox.checked) {
    setErrorTerms(checkBox, "Please validate the conditions above in order to subscribe");
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

var setError = function setError(input, message) {
  var formSection = input.parentElement;
  var small = formSection.querySelector("small");
  small.innerText = message;
  formSection.className = "form__section error";
};

var setSuccess = function setSuccess(input) {
  var formSection = input.parentElement;
  formSection.className = "form__section success";
};

var setSuccessTerms = function setSuccessTerms(input) {
  var formSection = input.parentElement;
  formSection.className = "form__section_terms success";
};

var setErrorTerms = function setErrorTerms(input, message) {
  var formSection = input.parentElement;
  var small = formSection.querySelector("small");
  small.innerText = message;
  formSection.className = "form__section_terms error";
};

var checkForStringOnly = function checkForStringOnly(input) {
  var matches = input.match(/\d+/g);

  if (matches != null) {
    return false;
  }
};