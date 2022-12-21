// let username = "Виола";
// console.log(username); для вывода в консоль

// alert( num.toFixed(1) ); // "12.3"

const a = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));

function convert(x) {
    return ((9 / 5) * x + 32);
}
 
alert(`Температура по Цельсию = ${a}, температура по Фаренгейту = ${convert(a).toFixed(2)}`);