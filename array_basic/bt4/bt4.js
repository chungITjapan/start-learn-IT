let arrInt = [];
let index = 0;
do {
    let number = +prompt("Nhập vào một số");
    if (number >=0 || number<0) {
        arrInt[index] = number;
    } else {
        break;
    }
        index++;
} while (true);
let sum=0;
for (let i = 0; i < arrInt.length; i++) {
    sum +=arrInt[i];
}
console.log("Tổng các giá trị của mảng: ",sum);
let max = arrInt[0]
for (let j = 1; j < arrInt.length; j++) {
    if (max<=arrInt[j]) {
        max=arrInt[j]
    }
}
console.log("Phần tử có giá trị max là: ",max);
let min = arrInt[0]
for (let k = 1; k < arrInt.length; k++) {
    if (min>=arrInt[k]) {
        min=arrInt[k]
    }
}
console.log("Phần tử có giá trị min là: ",min);