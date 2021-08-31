//Un callback, es una funcion qué, al crearla, le pasamos cómo parámetro otra función. Así al momento de hacer una petición esta se ejecuta una vez terminado el llamado.

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

// Una funcion se puede llamar a si misma usando recursion

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
