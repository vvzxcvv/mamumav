"use strict";

//   let user = prompt("name");
//   if (user == "admin") {
//     let pass = prompt("pass");
//     if (pass == "zzz") {
//       alert("da");
//     } else if ((pass = null || pass == "")) {
//       alert("hz)");
//     } else {
//       alert("ne)");
//     }
//   } else if (user == null || user == "") {
//     alert("hz kto");
//   } else {
//     alert("nezn)");
//   }
// }

function loanCalculator() {
  const value = prompt("skolko deneg");
  const monthNumber = prompt("kakoi mesyatc");

  const loanCalc = function (value) {
    let definedMonth = value * 0.9 ** monthNumber;
    return definedMonth;
  };

  alert(`v ${monthNumber} mesyace ti ewe doljen ${loanCalc(value)}rub`);
}

function calcul_21() {
  alert("всем привет это калькуль 2.1!!!!!!))");
  const vibor = prompt("Выберите действие: +  -  *  /");
  if (["+", "-", "*", "/"].indexOf(vibor) > -1) {
    const a = Number(prompt("Первое число: "));
    if (typeof Number(a) === "number" && !isNaN(a)) {
      const b = Number(prompt("Второе число: "));
      if (typeof Number(b) === "number" && !isNaN(b)) {
        switch (vibor) {
          case "+":
            const resultatPlus = a + b;
            alert(resultatPlus);
            break;

          case "-":
            const resultatMinus = a - b;
            alert(resultatMinus);
            break;

          case "*":
            const resultatMult = a * b;
            alert(resultatMult);
            break;

          case "/":
            const resultatDecl = a / b;
            alert(resultatDecl);
            break;

          default:
            alert("ничего не выбрано");
            break;
        }
      } else alert("ЧИСЛО блять");
    } else alert("ЧИСЛО блять");
  } else
    alert('блять ну сказали же выбрать из " +  -  *  / " что сложного то сука');
}

function alertWindow() {
  alert("вейерштрасс");
}

function summation() {
  let userNumInput = prompt("введите число");
  if (typeof Number(userNumInput) === "number" && !isNaN(userNumInput)) {
    let sum = 0;
    for (let i = 1; i <= userNumInput; i++) {
      sum += i;
    }
    alert(sum);
  } else alert("дебил блять ЧИСЛО сказано ввести");
}

function findSmallestInt() {
  let userInput = [];
  while (true) {
    let input = prompt("введите число (esc или отмена чтобы закончить)");
    if (input === !Number || input == null || input == "") break;

    userInput.push(Number(input));
    console.log(userInput);
  }

  let max = userInput[0];
  let min = userInput[0];
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] > max) max = userInput[i];
    if (userInput[i] < min) min = userInput[i];
  }
  alert(`max = ${max} \nmin = ${min}`);
}
