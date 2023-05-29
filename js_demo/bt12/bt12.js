let number = parseInt(prompt("Nhập số có 3 chữ số:"));
let digit1 = Math.floor(number / 100); // Lấy chữ số hàng trăm
let digit2 = Math.floor((number % 100) / 10); // Lấy chữ số hàng chục
let digit3 = number % 10; // Lấy chữ số hàng đơn vị

let reversedNumber = digit3 * 100 + digit2 * 10 + digit1;

document.write("Số đảo ngược: " + reversedNumber);