var mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {
  var element = document.getElementsByTagName("div");
  for (var index = element.length - 1; index >= 0; index--) {
    if (element[index].className === "dot") {
      element[index].parentNode.removeChild(element[index]);
    }
  }

  // Stop the propagation of events
  event.stopPropagation();
});

addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    return; // Prevent dots from being created when clicking the button
  }

  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
