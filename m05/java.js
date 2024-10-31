var table = 3; 
var operator = GetValueFromUser("operator"); 
table = parseInt(GetValueFromUser("table"), 10);


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
    return '';
  }
  return userInput.trim();
}

function GetTableContent(operator, table) {
  var i = 1; 
  var msg = '';
  
  if (operator === 'addition') {
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else if (operator === 'multiplication') {
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  } else {
    msg = "Invalid operator entered.";
  }
  
  return msg;
}
