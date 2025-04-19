document.addEventListener("DOMContentLoaded", function () {

    // Handle form submission
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const contact = document.getElementById("contact").value.trim();
            const address = document.getElementById("address").value.trim();

            // Check if all fields are filled
            if (!name || !email || !contact || !address) {
                alert("All fields are required!");
                return;
            }

            // Get stored users or initialize an empty array
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user to the array
            users.push({ name, email, contact, address });

            // Save updated users array to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset the form
            form.reset();

            alert("User registered successfully!");
        });
    }

    // Display registered users
    const usersTableBody = document.getElementById("usersTableBody");
    if (usersTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.contact}</td>
                            <td>${user.address}</td>
                        </tr>`;
            usersTableBody.innerHTML += row;
        });
    }
});
