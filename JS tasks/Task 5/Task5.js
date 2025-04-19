function validateForm() {
    let valid = true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let message = document.getElementById("message");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let websiteError = document.getElementById("websiteError");
    let messageError = document.getElementById("messageError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    websiteError.innerHTML = "";
    messageError.innerHTML = "";

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    website.classList.remove("invalid");
    message.classList.remove("invalid");

    if (name.value.trim() === "") {
        nameError.innerHTML = "This field is required";
        name.classList.add("invalid");
        valid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        emailError.innerHTML = "A valid email address is required";
        email.classList.add("invalid");
        valid = false;
    } else if (!email.value.match(emailPattern)) {
        emailError.innerHTML = "Invalid email format";
        email.classList.add("invalid");
        valid = false;
    }

    let urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.*)?$/;
    if (website.value.trim() === "") {
        websiteError.innerHTML = "A valid URL is required";
        website.classList.add("invalid");
        valid = false;
    } else if (!website.value.match(urlPattern)) {
        websiteError.innerHTML = "Invalid website URL";
        website.classList.add("invalid");
        valid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerHTML = "This field is required";
        message.classList.add("invalid");
        valid = false;
    }

    return valid;
}
