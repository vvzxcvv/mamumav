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
  const a = Number(prompt("Первое число: "));
  const b = Number(prompt("Второе число: "));

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
      alert('блять ну сказали же выбрать из " +  -  *  / " что сложного то сука');
      break;
  }
}
