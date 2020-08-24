const calculator = function (a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
};

function clickButton1() {
  document.getElementById("result").innerHTML = calculator(
    +document.getElementById("number1").value,
    "+",
    +document.getElementById("number2").value
  );
  document.getElementById("number2").value = "";
  document.getElementById("number1").value = "";
}

function clickButton2() {
  document.getElementById("result").innerHTML = calculator(
    +document.getElementById("number1").value,
    "-",
    +document.getElementById("number2").value
  );
  document.getElementById("number2").value = "";
  document.getElementById("number1").value = "";
}

function clickButton3() {
  document.getElementById("result").innerHTML = calculator(
    +document.getElementById("number1").value,
    "/",
    +document.getElementById("number2").value
  );
  document.getElementById("number2").value = "";
  document.getElementById("number1").value = "";
}

function clickButton4() {
  document.getElementById("result").innerHTML = calculator(
    +document.getElementById("number1").value,
    "*",
    +document.getElementById("number2").value
  );
  document.getElementById("number2").value = "";
  document.getElementById("number1").value = "";
}

/********Calculator Test*********/
// console.log(calculator(5, "*", 10));
