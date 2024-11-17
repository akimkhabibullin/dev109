function validateForm() {
    var isValid = true;
    var errorMessages = "";

    // First name validation
    var firstName = document.getElementById("firstname").value.trim();
    if (firstName === "" || firstName.length > 20 || !/^[a-zA-Z]+$/.test(firstName)) {
        errorMessages += "<p>First name is required, must be alphabetical, and no longer than 20 characters.</p>";
        isValid = false;
    }

    // Last name validation
    var lastName = document.getElementById("lastname").value.trim();
    if (lastName === "" || lastName.length > 50 || !/^[a-zA-Z]+$/.test(lastName)) {
        errorMessages += "<p>Last name is required, must be alphabetical, and no longer than 50 characters.</p>";
        isValid = false;
    }

    // Email validation
    var email = document.getElementById("email").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        errorMessages += "<p>Invalid email address.</p>";
        isValid = false;
    }

    // Phone number validation
    var phone = document.getElementById("phone").value.trim();
    var phoneRegex = /^[0-9-]+$/;
    if (phone === "" || phone.length > 15 || !phoneRegex.test(phone)) {
        errorMessages += "<p>Phone number is required, must be numerical, and no longer than 15 digits.</p>";
        isValid = false;
    }

    // Username validation
    var username = document.getElementById("username").value.trim();
    if (username === "" || username.length > 12) {
        errorMessages += "<p>Username is required and no longer than 12 characters.</p>";
        isValid = false;
    }

    // Password validation
    var password = document.getElementById("password").value.trim();
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (password === "" || !passwordRegex.test(password)) {
        errorMessages += "<p>Password must be up to 7 characters and include one uppercase, one lowercase, one number, and one special character.</p>";
        isValid = false;
    }

    // Address validation
    var address = document.getElementById("address").value.trim();
    if (address === "") {
        errorMessages += "<p>Address is required.</p>";
        isValid = false;
    }

    // City validation
    var city = document.getElementById("city").value.trim();
    if (city === "") {
        errorMessages += "<p>City is required.</p>";
        isValid = false;
    }

    // State validation
    var state = document.getElementById("state").value.trim();
    if (state === "") {
        errorMessages += "<p>State is required.</p>";
        isValid = false;
    }

    // Country validation
    var country = document.getElementById("country").value.trim();
    if (country === "") {
        errorMessages += "<p>Country is required.</p>";
        isValid = false;
    }

    // Zip code validation (only for USA)
    var zipcode = document.getElementById("zipcode").value.trim();
    if (country === "USA" && (zipcode === "" || zipcode.length !== 5 || !/^[0-9]+$/.test(zipcode))) {
        errorMessages += "<p>Zip code is required for USA and must be 5 digits.</p>";
        isValid = false;
    }

    // Show all error messages
    document.getElementById("errorMessages").innerHTML = errorMessages;

    return isValid;
}

