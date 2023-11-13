let  expression= '';

function appendNumber(number) {
    expression += number;
    document.getElementById('result').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function calculate() {
  try {
   const result = eval(expression);
   document.getElementyById('result').value = result;
   expression = '';
 }
}

function clear() {
 expression = '' ;
 document