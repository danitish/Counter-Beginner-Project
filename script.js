let counter = document.getElementById("num");
let number = 0;

function deNum() {
  number -= 1;
  counter.innerHTML = number;
}
function inNum() {
  number += 1;
  counter.innerHTML = number;
}
function reNum() {
  number *= 0;
  counter.innerHTML = number;
}
