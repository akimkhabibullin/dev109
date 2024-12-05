  var form = document.forms["myContact"];
  var emailInput = form["email"];

  
  var errorMessage = document.createElement("div");
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "0.9rem";
  errorMessage.style.marginTop = "5px";
  errorMessage.textContent = ""; // Initially empty
  emailInput.parentNode.appendChild(errorMessage); // Add below

  form.addEventListener("submit", (event) => {
    var emailValue = emailInput.value;

    // Check if the email contains an @ symbol
    if (!emailValue.includes("@")) {
      errorMessage.textContent = "Please enter a valid email address with an '@' symbol.";
      event.preventDefault(); // Prevent the form from submitting
    } else {
      errorMessage.textContent = ""; // Clear the error message if valid
    }
  });
