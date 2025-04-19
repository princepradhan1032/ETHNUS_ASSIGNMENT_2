document.getElementById("registrationForm").addEventListener("input", function() {
    validateField("fname", "fnameError");
    validateField("lname", "lnameError");
    validateEmail();
    validatePassword();
    validateRePassword();
    validateField("age", "ageError");
    validatePhone();
    validateField("address", "addressError");
    validateField("state", "stateError");
});

function validateField(fieldId, errorId) {
    let field = document.getElementById(fieldId);
    let errorText = document.getElementById(errorId);
    if (field.value.trim() === "") {
        errorText.style.visibility = "visible";
    } else {
        errorText.style.visibility = "hidden";
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        emailError.style.visibility = "visible";
    } else {
        emailError.style.visibility = "hidden";
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.style.visibility = "visible";
    } else {
        passwordError.style.visibility = "hidden";
    }
}

function validateRePassword() {
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let rePasswordError = document.getElementById("rePasswordError");
    if (repassword === "" || password !== repassword) {
        rePasswordError.style.visibility = "visible";
    } else {
        rePasswordError.style.visibility = "hidden";
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let phoneError = document.getElementById("phoneError");
    let phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        phoneError.style.visibility = "visible";
    } else {
        phoneError.style.visibility = "hidden";
    }
}
