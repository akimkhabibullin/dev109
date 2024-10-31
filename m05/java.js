var operator = GetValueFromUser("operator");
var table = parseInt(GetValueFromUser("table"), 10);  // Convert input to integer

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, table);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you? ';
  if (valueType === "operator") {
    greetingMessage += "Enter 'addition' or 'multiplication'";
  } else {
    greetingMessage += "Enter a number";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
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
