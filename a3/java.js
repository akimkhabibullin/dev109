	
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (var i = 0; i < pHeight; i++) {
    rLine += "<p>";

    // Print symbols in white before the main symbols to align the pattern
    for (var j = 0; j < pHeight - i; j++) {
      rLine += "<span style='color: white;'>" + pSymbol + "</span>";
    }
    // Create each line in the rhombus shape with alternating colors
    for (var j = 0; j <= i * 2; j++) {
      // Check if position is even or odd for color switching
      if (j % 2 === 0) {
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    rLine += "</p>";
  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (var i = pHeight; i >= 0; i--) {
    rLine += "<p>";

    // Print symbols in white before the main symbols to align the pattern
    for (var j = pHeight - i; j > 0; j--) {
      rLine += "<span style='color: white;'>" + pSymbol + "</span>";
    }
    // Create each line in the rhombus shape with alternating colors
    for (var j = 0; j <= i * 2; j++) {
      // Check if position is even or odd for color switching
      if (j % 2 === 0) {
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      } else {
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
      }
    }

    rLine += "</p>";
  }

  document.getElementById("downLeft").innerHTML = rLine;
}
