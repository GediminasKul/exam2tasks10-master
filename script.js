/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let button = document.getElementById('submit-btn');
let weightValue = document.getElementById('options');
let input = document.getElementById('search');
let output = document.getElementById('output-text');

button.addEventListener('click', calculateFn);

function calculateFn(event) {
  event.preventDefault();
  let num;
  if (weightValue.value === 'Pounds') {
    num = input.value * 2.2046;
    output.textContent = `Your weight is ${num} pounds.`;
  } else if (weightValue.value === 'Ounces') {
    num = input.value * 35.274;
    output.textContent = `Your weight is ${num} ounces.`;
  } else if (weightValue.value === 'Grams') {
    num = input.value * 1000;
    output.textContent = `Your weight is ${num} grams.`;
  }
}
