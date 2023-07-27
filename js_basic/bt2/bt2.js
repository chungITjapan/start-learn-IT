let num1 = Number(prompt("Nhập vào số thứ nhất: "))
let num2 = Number(prompt("Nhập vào số thứ hai: "))
let num3 = Number(prompt("Nhập vào số thứ ba: "))

let max, min;


if (num1 >= num2 && num1 >= num3) {
  max = num1;
} else if (num2 >= num1 && num2 >= num3) {
  max = num2;
} else {
  max = num3;
}


if (num1 <= num2 && num1 <= num3) {
  min = num1;
} else if (num2 <= num1 && num2 <= num3) {
  min = num2;
} else {
  min = num3;
}

document.write("Số lớn nhất là:", max + "<br>");
document.write("Số nhỏ nhất là:", min);