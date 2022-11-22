function sum(a, b) {
  return a + b;
}

function calc(num1, num2, operator) {
  return operator(num1, num2)
}

console.log(calc(2, 3, sum))

setTimeout(() => {
  console.log('Hola Javascript')
}, 2000);

function greeting(name) {
  console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, 'Michael')