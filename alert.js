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
