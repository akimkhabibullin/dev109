// Wait until the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Select the button and attach a click event listener
    document.getElementById("processButton").addEventListener("click", processNumber);
});

function processNumber() {
    // Get the values 
    const operation = document.getElementById("propertyInput").value;
    const number = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");


    let output = "<p>";
    for (let i = 1; i <= 10; i++) {
        if (operation === "Multiplication") {
            output += `${i} x ${number} = ${i * number}<br>`;
        } else if (operation === "Addition") {
            output += `${i} + ${number} = ${i + number}<br>`;
        }
    }
    output += "</p>";

    // Display the result on the blackboard
    resultDiv.innerHTML = output;
}
