// Output: 20.00 C = 68.00 F

let c,f;

c = Number(prompt('Enter a temperature in C: ')).toFixed(2);
console.log('c',c);
f = (c * 9) / 5 + 32;
const output = `${c} C = ${f} F`;
const result = document.querySelector('.result');
result.textContent = output;