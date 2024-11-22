const inputDisplay = document.querySelector("#display");

function appendToDisplay(obj) {
  inputDisplay.value += obj;
}

function evaluateInput() {
  try {
    let ans = new Function("return " + inputDisplay.value)();
    inputDisplay.value = ans;
    if (Number.isNaN(ans) || !isFinite(ans)) {
      throw new Error("Invalid Calculation");
    }
    if (Number.isInteger(ans)) {
      inputDisplay.value = ans;
    } else {
      inputDisplay.value = ans.toFixed(5);
    }
  } catch (e) {
    inputDisplay.value = "Error";
  }
}

function clearDisplay() {
  inputDisplay.value = "";
}

function deleteNum() {
  if (inputDisplay.value) {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
  }
}
