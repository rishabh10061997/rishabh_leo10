function addToDisplay(value) {
  document.getElementById("addToDisplay").value += value;
}

function clearDisplay() {
  document.getElementById("addToDisplay").value = "";
}

function calculate() {
  let display = document.getElementById("addToDisplay");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
