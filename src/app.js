/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};*/

const card = document.getElementById("cardnumber");
const cvc = document.getElementById("cvc");
const amount = document.getElementById("amount");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalcode = document.getElementById("postalcode");

let form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const cardValue = card.value.trim();
  const cvcValue = cvc.value.trim();
  const amountValue = amount.value.trim();
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.Value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();
  const postalcodeValue = postalcode.value.trim();

  if (cardValue === "") {
    setError(card, "Card number is required");
  } else {
    setSuccess(card);
  }

  if (cvcValue === "") {
    setError(cvc, "CVC is required");
  } else {
    setSuccess(cvc);
  }

  if (amountValue === "") {
    setError(amount, "Amount is required");
  } else {
    setSuccess(amount);
  }

  if (firstnameValue === "") {
    setError(firstname, "First Name is required");
  } else {
    setSuccess(firstname);
  }

  if (lastnameValue === "") {
    setError(lastname, "Last Name is required");
  } else {
    setSuccess(lastname);
  }

  if (cityValue === "") {
    setError(city, "City is required");
  } else {
    setSuccess(city);
  }

  if (stateValue === "") {
    setError(state, "State is required");
  } else {
    setSuccess(state);
  }

  if (postalcodeValue === "") {
    setError(postalcode, "Postal Code is required");
  } else {
    setSuccess(postalcode);
  }
};
