document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    let fullname = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let rePassword = $("#re-password").val().trim();
    let phone = $("#phone").val().trim();
    let message = $("#message").val().trim();
    if (fullname === "") {
      $("#nameError").text("Fullname is required!");
      isValid = false;
    } else {
      $("#nameError").text(" ");
    }

    if (email === "") {
      $("#emailError").text("Email is required!");
      isValid = false;
    } else if (!validateEmail(email)) {
      $("#emailError").text("Invalid email!");
      isValid = false;
    } else {
      $("#emailError").text(" ");
    }

    if (password === "") {
      $("#passwordError").text("Password is required!");
      isValid = false;
    } else if (password.length < 6) {
      $("#passwordError").text("Atleast 6 letters!");
      isValid = false;
    } else {
      $("#passwordError").text(" ");
    }

    if (password.length >= 6) {
      if (rePassword !== password) {
        $("#rePasswordError").text("Password do not match!");
        isValid = false;
      } else {
        $("#rePasswordError").text(" ");
      }
    }

    let phonePattern = /^\d{10,11}$/;

    if (phone === "") {
      $("#phoneError").text("Phone number is required!");
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      $("#phoneError").text(
        "Invalid phone number! (must contain only digits and be 10 to 11 digits long)"
      );
      isValid = false;
    } else {
      $("#phoneError").text(" ");
    }

    if (message === "") {
      $("#messageError").text("Message is required!");
      isValid = false;
    } else {
      $("#messageError").text(" ");
    }

    if (isValid) {
      window.location.href = "Home.html";
    }
  });
function validateEmail(email) {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(email);
}
