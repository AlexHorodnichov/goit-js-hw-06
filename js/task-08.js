const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", sendSubmit);

function sendSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
}