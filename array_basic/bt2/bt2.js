//Khai bao mang 2 chieu
let arrInt =[];
// Nhap so dong va cot
let row = +prompt("Nhập vào số dòng");
let col = +prompt("Nhập vào số cột");
//Nhap gia tri cac phan tu
for (let i = 0; i < row; i++) {
    let arrRow =[];
    for (let j = 0; j < col; j++) {
       let number =+prompt("Nhập các phần tử cùa mảng");
       arrRow.push(number);
    }
    arrInt.push(arrRow);
}
console.log("Giá trị các phần tử của mảng: ",arrInt);
console.log("Các giá trị nẳm trên đường biên:");
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
       if (i==0 || j==0 || i==row-1 || j==col-1) {
        console.log(arrInt[i][j]);
       }
    }
}
if (row == col) {
    console.log("Các phần tử nằm trên đường chéo chính ");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i==j) {
                console.log(arrInt[i][j]);
            }
        }
    }
    console.log("Các phần tử nằm trên đường chéo phụ ");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i+j==row-1 || i+j==col-1) {
                console.log(arrInt[i][j]);
            }
        }
    }

} else {
    console.log("Mảng không có đường chéo chính và phụ");
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col-1; j++) {
        for (let k = j+1; k < col; k++) {
           if (arrInt[i][j]>arrInt[i][k]) {
              let temp = arrInt[i][j];
              arrInt[i][j]=arrInt[i][k];
              arrInt[i][k]=temp;
           }
        }
    }
}
console.log("mảng tăng dần theo dòng:", arrInt);
