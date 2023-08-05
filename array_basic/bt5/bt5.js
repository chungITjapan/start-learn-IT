// Khai báo và khởi tạo mảng 1 chiều số nguyên
let arrInt =[];
// Nhập vào 2 số nguyên a, b
let a = +prompt('Nhập vào số nguyên a');
let b = +prompt('Nhập vào số nguyên b');
console.log('Hai số nguyên a và b vừa nhập vào là : ', a + " và " + b);
// Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b
if (a<b) {
    for (let i =a+1; i<b; i++) {
        arrInt.push(i);
    } 
} else {
    for (i=b+1; i<a; i++) {
        arrInt.push (i);
    }
}
console.log('Mảng chứa các phần tử có giá trị nằm giữa a và b là :' ,arrInt);