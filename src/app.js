let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let enter = true;
  let missing = document.querySelector("#missing");
  let cardnumber = document.querySelector("#cardnmbr");
  let cvc = document.querySelector("#cvc");
  let amount = document.querySelector("#amount");
  let firstname = document.querySelector("#firstname");
  let lastname = document.querySelector("#lastname");
  let city = document.querySelector("#city");
  let state = document.querySelector("#state");
  let postalcode = document.querySelector("#postal");
  let message = document.querySelector("#message");

  if (cardnumber.value === "") {
    enter = false;
    cardnumber.classList.add("is-invalid");
    cardnumber.style.backgroundColor = "#f8d7da";
  } else if (!cardnumber.test(cardnumber.value)) {
    enter = false;
    cardnumber.classList.add("is-invalid");
  } else {
    cardnumber.classList.remove("is-invalid");
  }

  if (cvc.value === "") {
    enter = false;
    cvc.classList.add("is-invalid");
    cvc.style.backgroundColor = "#f8d7da";
  } else if (!cvc.test(cvc.value)) {
    enter = false;
    cvc.classList.add("is-invalid");
  } else {
    cvc.classList.remove("is-invalid");
  }

  if (amount.value === "") {
    enter = false;
    amount.classList.add("is-invalid");
    amount.style.backgroundColor = "#f8d7da";
  } else if (!amount.test(amount.value)) {
    enter = false;
    amount.classList.add("is-invalid");
  } else {
    amount.classList.remove("is-invalid");
  }

  if (firstname.value === "") {
    enter = false;
    firstname.classList.add("is-invalid");
    firstname.style.backgroundColor = "#f8d7da";
  } else if (!firstname.test(firstname.value)) {
    enter = false;
    firstname.classList.add("is-invalid");
  } else {
    firstname.classList.remove("is-invalid");
  }

  if (lastname.value === "") {
    enter = false;
    lastname.classList.add("is-invalid");
    lastname.style.backgroundColor = "#f8d7da";
  } else if (!lastname.test(lastname.value)) {
    enter = false;
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.remove("is-invalid");
  }

  if (city.value === "") {
    enter = false;
    city.classList.add("is-invalid");
    city.style.backgroundColor = "#f8d7da";
  } else if (!city.test(city.value)) {
    enter = false;
    city.classList.add("is-invalid");
  } else {
    city.classList.remove("is-invalid");
  }

  if (postalcode.value === "") {
    enter = false;
    postalcode.classList.add("is-invalid");
    postalcode.style.backgroundColor = "#f8d7da";
  } else if (!postalcode.test(postalcode.value)) {
    enter = false;
    postalcode.classList.add("is-invalid");
  } else {
    postalcode.classList.remove("is-invalid");
  }

  if (state.value === "") {
    enter = false;
    state.classList.add("is-invalid");
    state.style.backgroundColor = "#f8d7da";
  } else {
    state.classList.remove("is-invalid");
  }

  if (message.value === "") {
    enter = false;
    message.classList.add("is-invalid");
    message.style.backgroundColor = "#f8d7da";
  } else if (!message.test(message.value)) {
    enter = false;
    message.classList.add("is-invalid");
  } else {
    message.classList.remove("is-invalid");
  }

  if (enter) {
    form.submit();
  } else {
    missing.classList.remove("d-none");
    missing.classList.add("d-block");
  }
});
