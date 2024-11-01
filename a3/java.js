	
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
//upRight(pHeight, pColorEven, pColorOdd, pSymbol);
//downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (var i = 0; i < pHeight ; i++) {
    rLine += "<p>";

    // Print spaces before the symbols to align the pattern
    for (var j = 0; j < pHeight  - i ; j++) {
      rLine += "_";  
    }

    // Create each line in the rhombus shape with alternating colors
    for (var j = 0; j <= i*2; j++) {
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

    // Print spaces before the symbols to align the pattern
    for (var j = pHeight - i; j > 0; j--) {
      rLine += "_";
    }

    // Create each line in the rhombus shape with alternating colors
    for (var j = 0; j <= i*2; j++) {
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

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=0;i<pHeight;i++){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<=i;j++){

      //Is the position even or odd so we change the color
      if (j%2)
      //even
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
      //odd
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    rLine +="</p>";
    // console.log(rLine);

  }

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      if (j%2)
      //even
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
      //odd
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
  rLine +="</p>";
  // console.log(rLine);

  }

document.getElementById("downRight").innerHTML = rLine;
}


