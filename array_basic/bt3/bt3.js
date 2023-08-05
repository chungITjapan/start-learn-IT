// Tao mang
let styles = ["Jazz", "Blues"];
// Them phan tu vao cuoi mang
styles.push("Rock-n-Roll");
// Thay the phan tu nam giua
styles.splice(1, 1, "Classics");
//Xoa phan tu dau tien va hien thi
styles.shift();
console.log("Mảng sau khi xóa phần tử đầu tiên ",styles);
// Them phan tu vao dau mang va hien thii
styles.unshift("Rap", "Reggae");
console.log("Mảng sau khi thêm phần tử vào đầu mảng-->", styles);