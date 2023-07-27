let num1 = +prompt('nhap vao diem HTML');
let num2 = +prompt('nhap vao diem CSS');
let num3 = +prompt('nhap vao diem Javascript');
let gpa = (num1+num2+num3)/3;
debugger;
if (gpa < 5) {
    console.log('kem');
} else if (gpa < 6 ) {
    console.log('yeu');
}else if (gpa <7) {
    console.log('trung binh');
}else if (gpa < 8) {
    console.log('kha');
}else if (gpa < 9) {
    console.log('gioi');
}else {
    console.log('xuat sac');
};    