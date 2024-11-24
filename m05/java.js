// Wait until the DOM is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    processNumber();
});

function processNumber() {
    // Ask the user
    var operation = prompt("Would you like 'Multiplication' or 'Addition'?");
    var number = parseInt(prompt("Enter a number:"));
    
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }
    if (operation !== "Multiplication" && operation !== "Addition") {
        alert("Invalid operation. Please enter either 'Multiplication' or 'Addition'.");
        return;
    }

    var output = "<p>";
    for (var i = 1; i <= 10; i++) {
        if (operation === "Multiplication") {
            output += `${i} x ${number} = ${i * number}<br>`;
        } else if (operation === "Addition") {
            output += `${i} + ${number} = ${i + number}<br>`;
        }
    }
    output += "</p>";
    //display it
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = output;
}
