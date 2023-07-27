let weight = +prompt('nhap vao can nang cua ban');
document.write('can nang cua ban la '+weight+'kg'+'<br>');
let height = +prompt('nhap vao chieu cao cua ban ');
document.write('chieu cao cua ban la '+height+'cm'+'<br>');
height =height/100;

let bmi = weight/(height*height);
if (bmi < 18) {
    document.write("chi so cua ban la Underweight");
 } else if (bmi < 25.0) {
    document.write("chi so cua ban ban la Normal");
 } else if (bmi < 30.0) {
    document.write("chi so cua ban ban la Overweight");
 } else {
    document.write("chi so cua ban ban la Obese");
 };