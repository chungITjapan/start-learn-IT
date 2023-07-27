let num1 = +prompt("nhap vao 1 so");
let num2 = +prompt("nhap vao so tiep theo");
let calculation = prompt("nhap vao phep tinh");
debugger;
switch (calculation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log(null);
}
