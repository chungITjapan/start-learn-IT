// Khai bao mang
let arrayInt = [];
let sum=0;
let total=0;
// Nhap 5 gia tri vao mang
for (let i = 0; i <5; i++) {
    let number = +prompt("Nhập vào số nguyên");
    arrayInt.push(number);
}
//Hien thi cac phan tu cua mang
console.log("Các phần tử của mảng là:");
for (let index = 0; index < arrayInt.length; index++) {
    console.log(arrayInt[index]);
}
//In cac phan tu chan va tinh tong
console.log("Các phần tử chẵn của mảng là:");
for (let j = 0; j < arrayInt.length; j++) {
    if (arrayInt[j]%2==0) {
        console.log(arrayInt[j]);
        sum+=arrayInt[j];
    }

}
console.log("Tổng các số chẵn là: ",sum);
//In cac phan tu co chi so le va tinh tong
console.log("Các phần tử có chỉ số lẻ lẻ của mảng là:");
for (let k = 0; k < arrayInt.length; k++) {
  if (k%2!=0) {
    console.log(arrayInt[k]);
    total+=arrayInt[k];
  }

}
console.log("Tổng các số lẻ là: ",total);
//In cac gia tri phan tu la so nguyen to
console.log("Số nguyên tố là: ");
for (let l = 0; l < arrayInt.length; l++) {
    checkPrime=true

        for (let m = 2; m <= Math.sqrt(arrayInt[l]); m++) {
            if (arrayInt[l]%m==0) {
                checkPrime=false;
                break;
            }
        }
        if (checkPrime) {
            console.log(arrayInt[l]);
        }
}
//In gia tri max
let max = arrayInt[0];
if (max<arrayInt[1]) {
    max=arrayInt[1];
}
if (max<arrayInt[2]) {
    max=arrayInt[2];
}
if (max<arrayInt[3]) {
    max=arrayInt[3];
}
if (max<arrayInt[4]) {
    max=arrayInt[4];
}
console.log("Phần tử có giá trị max là: ",max);
//In gia tri min
let min = arrayInt[0];
if (min>arrayInt[1]) {
    min=arrayInt[1];
}
if (min>arrayInt[2]) {
    min=arrayInt[2];
}
if (min>arrayInt[3]) {
    min=arrayInt[3];
}
if (min>arrayInt[4]) {
    min=arrayInt[4];
}
console.log("Phần tử có giá trị min là: ",min);
//Sap xep Khong dung sort
console.log("Mảng sau khi sắp xếp giảm dần");
for (let i = 0; i < arrayInt.length-1; i++) {
   for (let j = i+1; j < arrayInt.length; j++) {
      if (arrayInt[i]<arrayInt[j]) {
        let temp = arrayInt[i];
        arrayInt[i]=arrayInt[j];
        arrayInt[j]=temp;
      }
   }
}
console.log(arrayInt);
//Sap xep dung sort//
arrayInt.sort((a, b)=>b-a);
console.log("Mảng sắp xếp giảm dần-->", arrayInt);

//Nhap vao so nguyen

let numberFind = +prompt("Nhập thêm vào một số cần tìm");
let cnt =0;
for (let d = 0; d < arrayInt.length; d++) {
   if (arrayInt[d]==numberFind) {
      cnt++;
   }

}
console.log("Chỉ số của phần tử có giá trị number trong mảng: ", cnt);