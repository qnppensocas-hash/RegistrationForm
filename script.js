document.getElementById("registerForm").addEventListener("submit", function(e) {

    e.preventDefault();
    let valid = true;

    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let birthday = document.getElementById("birthday");
    let gender = document.getElementById("gender");
    let country = document.getElementById("country");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let terms = document.getElementById("terms");

    let namePattern = /^[A-Za-z]+$/;
    let phonePattern = /^[0-9]{11}$/;

    if (!namePattern.test(firstName.value)) {
        errors[0].innerHTML = "Letters only.";
        valid = false;
    }

    if (!namePattern.test(lastName.value)) {
        errors[1].innerHTML = "Letters only.";
        valid = false;
    }

    if (username.value == "") {
        errors[2].innerHTML = "Required.";
        valid = false;
    }

    if (!email.value.includes("@")) {
        errors[3].innerHTML = "Email must contain @";
        valid = false;
    }

    if (!phonePattern.test(phone.value)) {
        errors[4].innerHTML = "Enter 11 digit number.";
        valid = false;
    }

    if (birthday.value == "") {
        errors[5].innerHTML = "Select your birthday.";
        valid = false;
    }

    if (gender.value == "") {
        errors[6].innerHTML = "Select gender.";
        valid = false;
    }

    if (country.value == "") {
        errors[7].innerHTML = "Select country.";
        valid = false;
    }

    if (password.value.length < 6) {
        errors[8].innerHTML = "Minimum 6 characters.";
        valid = false;
    }

    if (password.value != confirmPassword.value) {
        errors[9].innerHTML = "Passwords do not match.";
        valid = false;
    }

    if (!terms.checked) {
        document.getElementById("termsError").innerHTML = "You must agree first.";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        document.getElementById("registerForm").reset();
    }

});
