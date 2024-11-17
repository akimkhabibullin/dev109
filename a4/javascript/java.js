function validateForm() {
    var isValid = true; 
    var errorMessages = "";

    // Clear previous error messages
    document.querySelectorAll(".errorMessages").forEach(function(element) {
        element.innerHTML = "";
    });

    var firstname = document.getElementById("firstname").value.trim();
    if (!firstname || firstname.length > 20 || !isAlpha(firstname)) {
        document.getElementById("firstnameError").innerHTML =
            "First name is required, must be alphabetical, and no longer than 20 characters.";
        isValid = false;
    }

    var lastname = document.getElementById("lastname").value.trim();
    if (!lastname || lastname.length > 50 || !isAlpha(lastname)) {
        document.getElementById("lastnameError").innerHTML =
            "Last name is required, must be alphabetical, and no longer than 50 characters.";
        isValid = false;
    }

    var email = document.getElementById("email").value.trim();
    if (!email || !isValidEmail(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address.";
        isValid = false;
    }

    var phone = document.getElementById("phone").value.trim();
    if (!phone || phone.length > 15 || !isNumeric(phone)) {
        document.getElementById("phoneError").innerHTML =
            "Phone number is required, must be numerical, and no longer than 15 digits.";
        isValid = false;
    }

    var username = document.getElementById("username").value.trim();
    if (!username || username.length > 12) {
        document.getElementById("usernameError").innerHTML =
            "Username is required and no longer than 12 characters.";
        isValid = false;
    }

    var password = document.getElementById("password").value.trim();
    if (!password || !isValidPassword(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be up to 7 characters and include one uppercase, one lowercase, one number, and one special character.";
        isValid = false;
    }

    // Validate Address
    var address = document.getElementById("address").value.trim();
    if (!address) {
        document.getElementById("addressError").innerHTML = "Address is required.";
        isValid = false;
    }

    // Validate City
    var city = document.getElementById("city").value.trim();
    if (!city) {
        document.getElementById("cityError").innerHTML = "City is required.";
        isValid = false;
    }

    // Validate State
    var state = document.getElementById("state").value.trim();
    if (!state) {
        document.getElementById("stateError").innerHTML = "State is required.";
        isValid = false;
    }

    // Validate Country
    var country = document.getElementById("country").value.trim();
    if (!country) {
        document.getElementById("countryError").innerHTML = "Country is required.";
        isValid = false;
    }

    // Validate Zip Code (only for USA)
    if (country === "USA") {
        var zipcode = document.getElementById("zipcode").value.trim();
        if (!zipcode || zipcode.length !== 5 || !isNumeric(zipcode)) {
            document.getElementById("zipcodeError").innerHTML =
                "Zip code is required for USA and must be 5 digits.";
            isValid = false;
        }
    }

    return isValid;
}

// Function to check if a string contains only alphabetic characters
function isAlpha(str) {
    for (var i = 0; i < str.length; i++) {
        if ((str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) && (str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122)) {
            return false;
        }
    }
    return true;
}

// Function to check if a string is a valid email format
function isValidEmail(str) {
    var atSymbol = str.indexOf('@');
    var dotSymbol = str.lastIndexOf('.');

    if (atSymbol === -1 || dotSymbol === -1 || atSymbol > dotSymbol) {
        return false;
    }
    return true;
}

// Function to check if a string contains only numbers (no letters or symbols)
function isNumeric(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
            return false;
        }
    }
    return true;
}

// Function to validate password based on criteria
function isValidPassword(str) {
    if (str.length > 7 || str.length < 1) return false;

    var hasUpper = false;
    var hasLower = false;
    var hasNumber = false;
    var hasSpecialChar = false;

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        if (char >= 'a' && char <= 'z') hasLower = true;
        if (char >= '0' && char <= '9') hasNumber = true;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) hasSpecialChar = true;
    }

    return hasUpper && hasLower && hasNumber && hasSpecialChar;
}
