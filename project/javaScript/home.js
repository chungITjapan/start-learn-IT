function checkLogin() {
    // Kiểm tra xem đã đăng nhập chưa, nếu chưa đăng nhập thì chuyển về trang đăng nhập
    let email = localStorage.getItem('userLogin');
    if (email == null) {
      // Chưa đăng nhập
      window.location.href = 'login.html';
    }
  }
  // Lấy dữ liệu allCourses từ localStorage
  let allCourses = localStorage.getItem('allCourses')
    ? JSON.parse(localStorage.getItem('allCourses'))
    : [];
  // Lấy dữ liệu allClasses từ localStorage
  let allClasses = localStorage.getItem('allClasses')
    ? JSON.parse(localStorage.getItem('allClasses'))
    : [];
  // Lấy dữ liệu allStudents từ localStorage
  let allStudents = localStorage.getItem('allStudents')
    ? JSON.parse(localStorage.getItem('allStudents'))
    : [];
  let courseNumber = 0;
  let classNumber = 0;
  let classActive = 0;
  let classFinish = 0;
  let classExpect = 0;
  let studentNumber = 0;
  let studentLearning = 0;
  let studentExpect = 0;
  let studentPending = 0;
  let studentGraduating = 0;
  allCourses.forEach((course) => {
    courseNumber++;
  });
  allClasses.forEach((itemClass) => {
    classNumber++;
    switch (itemClass.status) {
      case 'Chờ lớp':
        classExpect++;
        break;
      case 'Hoạt động':
        classActive++;
        break;
      case 'Kết thúc':
        classFinish++;
        break;
    }
  });
  allStudents.forEach((student) => {
    studentNumber++;
    switch (student.status) {
      case 'Chờ lớp':
        studentExpect++;
        break;
      case 'Đang học':
        studentLearning++;
        break;
      case 'Bảo lưu':
        studentPending++;
        break;
      case 'Đình chỉ':
        studentPending++;
        break;
      case 'Tốt nghiệp':
        studentGraduating++;
        break;
    }
  });
  document.getElementById('courseNumber').innerHTML = courseNumber;
  document.getElementById('classNumber').innerHTML = classNumber;
  document.getElementById('classActive').innerHTML = classActive;
  document.getElementById('classFinish').innerHTML = classFinish;
  document.getElementById('classExpect').innerHTML = classExpect;
  document.getElementById('studentNumber').innerHTML = studentNumber;
  document.getElementById('studentExpect').innerHTML = studentExpect;
  document.getElementById('studentLearning').innerHTML = studentLearning;
  document.getElementById('studentPending').innerHTML = studentPending;
  document.getElementById('studentGraduating').innerHTML = studentGraduating;
  // #region Khởi tạo hàm chuyển hướng qua trang Home
  function redirectHome() {
    window.location.href = 'home.html';
  } 
  // Khởi tạo hàm chuyển hướng qua trang CourseManagement
  function redirectCourseManagement() {
    window.location.href = 'courseManagement.html';
  }
  // Khởi tạo hàm chuyển hướng qua trang ClassManagement
  function redirectClassManagement() {
    window.location.href = 'classManagement.html';
  }
  // Khởi tạo hàm chuyển hướng qua trang studentManagement
  function redirectStudentManagement() {
    window.location.href = 'studentManagement.html';
  }
  // Khởi tạo hàm chuyển hướng qua trang accountManagement
  function redirectAccountManagement() {
    window.location.href = 'accountManagement.html';
  }
  // Khởi tạo hàm đăng xuất
  function logOut() {
    // Thực hiện xóa userLogin trong localStorage
    localStorage.removeItem('userLogin');
    window.location.href = 'login.html';
  }
  // #endregion
  document.onload = checkLogin();