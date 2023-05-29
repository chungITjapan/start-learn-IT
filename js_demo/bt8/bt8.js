let r = +prompt("Nhập bán kính hình tròn");
let d = r*2; 
let s =Math.PI * r * r; 
let c = 2 * Math.PI * r;
document.write("Chu vi hình tròn là: " +s.toFixed(3) + "<br>");
document.write("Diện tích hình tròn  là: " +c.toFixed(3));