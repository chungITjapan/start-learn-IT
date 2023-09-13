let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  // B1: Lấy email và password người dùng nhập
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  // B2: Kiểm tra có tồn tại email và password có trong userSystem hay không
  let checkLogin = checkUserExist(email, password);
  if (checkLogin) {
    // B3.1: Có tồn tại ---> cho vào trang quản trị sinh viên
    // -Lưu lại user vừa đăng nhập dùng để xây dựng logOut
    localStorage.setItem('userLogin', email);
    window.location.href = 'home.html';
  } else {
    // B3.2: Không tồn tại ---> báo cáo không tồn tại và cho đăng nhập lại
    alert('email hoặc password không tồn tại, vui lòng đăng nhập lại');
  }
});
// Khởi tạo hàm kiểm tra có tồn tạo email và password trong userSystem hay không
function checkUserExist(email, password) {
  let userSystem = localStorage.getItem('userSystem')
    ? JSON.parse(localStorage.getItem('userSystem'))
    : [];
  for (let index = 0; index < userSystem.length; index++) {
    if (
      userSystem[index].email === email &&
      userSystem[index].password == password &&
      userSystem[index].status == 'Đang hoạt động'
    ) {
      return true;
    }
  }
  return false;
}