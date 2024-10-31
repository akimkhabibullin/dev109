// Define initial variables
var table = parseInt(GetValueFromUser("table"), 10);
var operator = GetValueFromUser("operator");

// Get the HTML element to display output
var el = document.getElementById("blackboard");
el.innerHTML = GetTableContent(operator, table);

// Function to get user input
function GetValueFromUser(valueType) {
    let greetingMessage = "Hello. How are you?";
    if (valueType === "operator") {
        greetingMessage += " Enter 'addition' or 'multiplication'";
    } else {
        greetingMessage += " Enter a number";
    }

    let userInput = prompt(greetingMessage);
    if (userInput === null) {
        return ''; // Return empty string if user canceled the prompt
    }
    return userInput.trim();
}

// Function to generate table content
function GetTableContent(operator, table) {
    let msg = ""; // String to store message
    if (operator === "addition") {
        for (let i = 1; i <= 10; i++) {
            msg += i + " + " + table + " = " + (i + table) + "<br />";
        }
    } else if (operator === "multiplication") {
        for (let i = 1; i <= 10; i++) {
            msg += i + " x " + table + " = " + (i * table) + "<br />";
        }
    } else {
        msg = "Invalid operator entered.";
    }
    return msg;
}
