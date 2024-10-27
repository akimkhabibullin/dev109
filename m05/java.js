var table = 3; // Unit of table
var operator = GetValueFromUser("operator"); // Retrieve the operator
table = parseInt(GetValueFromUser("table"), 10); // Retrieve and convert the table value to an integer

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType === "operator") {
    greetingMessage += " Enter 'addition' or 'multiplication'";
  } else {
    greetingMessage += " Enter number";
  }
  
  var userInput = prompt(greetingMessage);
  if (userInput === null) {
    return ''; // Exit if the user cancels
  }
  return userInput.trim(); // Remove extra whitespace
}

function GetTableContent(operator, table) {
  var i = 1; // Set counter to 1
  var msg = ''; // Message  
  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else if (operator === 'multiplication') {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  } else {
    msg = "Invalid operator entered.";
  }
  
  return msg;
}
