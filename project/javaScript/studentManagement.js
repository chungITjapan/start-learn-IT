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
  // #region Khởi tạo newStudentModal có công dụng đóng modal khi người dùng nhấp chuột vào nút thêm mới,
  // nó được xem như một đối tượng tùy ý
  var newStudentModal = new bootstrap.Modal(
    document.getElementById('newStudent'),
    {
      keyboard: false,
    }
  );
  // #endregion
  // #region Popup modal delete
  let btnDeleteStudent = document.getElementById('btnDeleteStudent');
  var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'), {
    keyboard: false,
  });
  btnDeleteStudent.onclick = function () {
    var studentId = btnDeleteStudent.getAttribute('student');
    deleteStudent(studentId);
    deleteModal.hide();
  };
  //#endregion
  
  //  Khởi tạo biến currentPage recordPerPage và tạo một cái cờ với action='Create'
  let currentPage = 1;
  let recordPerPage = 5;
  let action = 'Create';
  // Hàm renderData lên table
  //1. Validate page
  function renderData(page, allStudents) {
    //1. Validate page
    let pageMax = getTotalPage(allStudents);
    if (page < 1) {
      // Vì trang nhỏ nhất là trang 1
      page = 1;
    }
    if (page > pageMax) {
      page = pageMax;
    }
    // 2.Render dữ liệu lên table ở trang page
    // 2.1. Truy cập vào phần tử tbody có id content
    let content = document.getElementById('content');
    content.innerHTML = '';
    // 2.2 Tính toán render dữ liệu lên table từ phần tử nào đến phần tử nào
    let indexMinOnPage = (page - 1) * recordPerPage;
    let indexMaxOnPage;
    // Nếu (page*recordPerPage) không lớn hơn allClasses.length tức là nó nhỏ hơn hoặc bằng,
    // trường hợp nó nhỏ hơn sẽ rời vào các trang(ví dụ: 2,3), trường hợp nó bằng sẽ rơi vào trang cuối cùng
    // trường hợp nhỏ hơn hoặc bằng thì indexMaxOnPage là bội của recordPerPage
    if (page * recordPerPage > allStudents.length) {
      indexMaxOnPage = allStudents.length;
    } else {
      indexMaxOnPage = page * recordPerPage;
    }
    // 3.4 Render dữ liệu với indexMinOnPage<=index<indexMaxOnPage
    if (indexMaxOnPage) {
      for (let index = indexMinOnPage; index < indexMaxOnPage; index++) {
        content.innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${allStudents[index].studentId}</td>
      <td>${allStudents[index].studentName}</td>
      <td>${allStudents[index].year}</td>
      <td>${allStudents[index].address}</td>
      <td>${allStudents[index].email}</td>
      <td>${allStudents[index].phone}</td>
      <td>${allStudents[index].sex}</td>
      <td>${allStudents[index].status}</td>
      <td>
          <button type="button"
          class="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#newStudent" onclick="initUpdate('${
            allStudents[index].studentId
          }')"><i class="far fa-edit"></i></button>
          <button type="button"
          class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="idOfYesButton('${
            allStudents[index].studentId
          }')"><i class="far fa-trash-alt"></i></button>
      </td>
    </tr>`;
      }
    }
    // 3.4.Render ra các trang
    let listPages = document.getElementById('listPages');
    listPages.innerHTML = '';
    for (let index = 1; index <= pageMax; index++) {
      if (index === currentPage) {
        listPages.innerHTML += `<li class="page-item active" ><a class="page-link" href="javascript:clickPage(${index})">${index}</a></li>`;
      } else {
        listPages.innerHTML += `<li class="page-item" ><a class="page-link" href="javascript:clickPage(${index})">${index}</a></li>`;
      }
    }
    // Ẩn hiện preview và next
    let preview = document.getElementById('preview');
    let next = document.getElementById('next');
    if (currentPage === 1) {
      preview.style.visibility = 'hidden';
    } else {
      preview.style.visibility = 'visible';
    }
    if (currentPage === pageMax) {
      next.style.visibility = 'hidden';
    } else {
      next.style.visibility = 'visible';
    }
  }
  //Hàm truyền vô id cho nút "Có"
  function idOfYesButton(studentId) {
    document
      .getElementById('btnDeleteStudent')
      .setAttribute('student', studentId);
  }
  // Hàm tính tổng số trang trên tổng số lượng các lớp học
  function getTotalPage(allStudents) {
    return Math.ceil(allStudents.length / recordPerPage);
  }
  // Hàm render dữ liệu theo trang khi click vào các trang
  function clickPage(page) {
    currentPage = page;
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    renderData(page, allStudents);
  }
  // Hàm previewPage
  function previewPage() {
    currentPage--;
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    renderData(currentPage, allStudents);
  }
  // Hàm nextPage
  function nextPage() {
    currentPage++;
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    renderData(currentPage, allStudents);
  }
  
  // Khởi tạo chức năng khi người dùng bấm "Thêm mới" hay "Cập nhập" thì sẽ tạo tạo mới dữ liệu hay là cập nhập dữ liệu
  let btnSave = document.getElementById('btnSave');
  btnSave.addEventListener('click', function (event) {
    // Chặn sự kiện mặc định submit form
    event.preventDefault();
    if (validateForm()) {
      if (action === 'Create') {
        createStudent();
      } else {
        updateStudent();
      }
      newStudentModal.hide();
    }
  });
  // #region Tạo ra một Combobox chứa các Course để người dùng chọn Course khi thêm mới sinh viên
  let btnOpenModal = document.getElementById('btnOpenModal');
  btnOpenModal.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('btnSave').innerHTML = 'Thêm mới';
    document.getElementById('new-update').innerHTML = 'Thêm mới sinh viên';
    document.getElementById('add-update').innerHTML = 'Hãy chọn khóa học ';
    document.getElementById('add-update-class').innerHTML = 'Hãy chọn lớp học ';
    let courseComboBox = document.getElementById('course');
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    courseComboBox.innerHTML = `<option selected>Mở các khóa học</option>`;
    allCourses.forEach((course) => {
      courseComboBox.innerHTML += `
      <option value="${course.courseId}">${course.courseName}</option>`;
    });
  });
  function classesOfCourse(event) {
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    let myCourseId = event.target.value;
    let classComboBox = document.getElementById('itemClass');
    classComboBox.innerHTML = `<option selected>Mở các lớp học học</option>`;
    classComboBox.innerHTML += allClasses
      .filter((item) => item.courseId === myCourseId)
      .map((item) => {
        return `<option value="${item.classId}">${item.className}</option>`;
      });
  }
  // Hàm thêm một Lớp học
  function createStudent() {
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2.Lấy dữ liệu trên form nhập và gán vào biến newStudent
    let newStudent = getDataStudentForm();
    // 3.Thêm newClass vào đầu danh sách
    allStudents.push(newStudent);
    //  4.set allClasses vào localStorage
    localStorage.setItem('allStudents', JSON.stringify(allStudents));
    // 7.renderData ở trang 1
    renderData(1, allStudents);
    // 8.resetForm lớp học
    resetStudentForm();
  }
  // Cập nhập class
  function initUpdate(studentId) {
    document.getElementById('btnSave').innerHTML = 'Cập nhập';
    document.getElementById('new-update').innerHTML =
      'Cập nhập thông tin sinh viên';
    document.getElementById('add-update').innerHTML =
      'Hãy chọn khóa học bạn muốn cập nhập';
    document.getElementById('add-update-class').innerHTML =
      'Hãy chọn lớp học bạn muốn cập nhập';
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2.Lấy index của một đối tượng bất kỳ cần cập nhập
    let index = getStudentById(allStudents, studentId);
    // 3.Hiển thị thông tin danh mục cần cập nhập
    document.getElementById('studentId').value = allStudents[index].studentId;
    document.getElementById('studentId').readOnly = true;
    document.getElementById('studentName').value = allStudents[index].studentName;
    document.getElementById('year').value = allStudents[index].year;
    document.getElementById('address').value = allStudents[index].address;
    document.getElementById('email').value = allStudents[index].email;
    document.getElementById('phone').value = allStudents[index].phone;
    if (allStudents[index].sex === 'Nam') {
      document.getElementById('male').checked = true;
    } else {
      document.getElementById('female').checked = true;
    }
    switch (allStudents[index].status) {
      case 'Chờ lớp':
        document.getElementById('studentExpect').checked = true;
        break;
      case 'Đang học':
        document.getElementById('studentActive').checked = true;
      case 'Bảo lưu':
        document.getElementById('studentReserved').checked = true;
        break;
      case 'Đình chỉ':
        document.getElementById('studentSuspension').checked = true;
        break;
      case 'Tốt nghiệp':
        document.getElementById('studentGraduate').checked = true;
        break;
    }
    let courseComboBox = document.getElementById('course');
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    courseComboBox.innerHTML = `<option selected>Mở các khóa học</option>`;
    allCourses.forEach((course) => {
      courseComboBox.innerHTML += `
      <option value="${course.courseId}">${course.courseName}</option>`;
    });
    // 6. Chuyển cờ action thành giá trị Edit
    action = 'Edit';
  }
  // Hàm updateCourse
  function updateStudent() {
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2.Lấy dữ liệu trên form cập nhập và gán vào biến newUpdateStudent
    let newUpdateStudent = getDataStudentForm();
    // 3.Lấy index của đối tượng update
    let indexUpdate = getStudentById(allStudents, newUpdateStudent.studentId);
    // 4.Thay thế đối tượng cũ bằng đối tượng đã update
    if (indexUpdate > -1) {
      allStudents[indexUpdate] = newUpdateStudent;
    }
    // 5.Set allStudents vào localStorage
    localStorage.setItem('allStudents', JSON.stringify(allStudents));
    // 6.Chuyển cờ action thành giá trị Create
    action = 'Create';
    // 7.Render lại data của trang hiện tại sau khi người dùng cập nhập và bấm lại nút save
    renderData(currentPage, allStudents);
    // 8.Reset lại form
    resetStudentForm();
    // 9.Xóa bỏ đi thuộc tích readOnly của classId
    document.getElementById('studentId').readOnly = false;
  }
  // Hàm deleteStudent
  function deleteStudent(studentId) {
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2. Lấy index của đối tượng cần xóa
    let indexDelete = getStudentById(allStudents, studentId);
    // 3.Xóa Class
    allStudents.splice(indexDelete, 1);
    // 4.Set allStudents vào localStorage
    localStorage.setItem('allStudents', JSON.stringify(allStudents));
    // 5.Render lại dữ liệu sau khi người dùng bấm nút xóa
    renderData(currentPage, allStudents);
  }
  // #region Tìm kiếm lớp học theo tên
  let btnSearch = document.getElementById('btnSearchStudent');
  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2.Lấy ra giá trị đã được người dùng nhập vào khi tìm kiếm lớp học
    let searchStudent = document.getElementById('studentNameSearch').value;
    // 3.Tìm kiếm lớp học theo tên lớp học đã được nhập vào
    let arrSearchClasses = allStudents.filter((a) =>
      a.studentName.includes(searchStudent)
    );
    // 4.Set lại currentPage
    currentPage = 1;
    // 5.Render lại mảng  lên table
    renderData(1, arrSearchClasses);
  });
  // #endregion
  // Hàm sắp xếp sinh viên
  function handSortStudent() {
    // 1.Lấy dữ liệu allStudents từ localStorage
    let allStudents = localStorage.getItem('allStudents')
      ? JSON.parse(localStorage.getItem('allStudents'))
      : [];
    // 2.Lấy tiêu chí sắp xếp
    let sortTarget = document.getElementById('sort').value;
    // 3.Sắp xếp theo các tiêu chí
    switch (sortTarget) {
      case 'studentNameASC':
        // Sắp xếp theo tên sinh viên tăng dần: sử dụng hàm sort
        allStudents.sort((a, b) =>
          a.studentName > b.studentName
            ? 1
            : a.studentName < b.studentName
            ? -1
            : 0
        );
        break;
      case 'studentNameDESC':
        // Sắp xếp theo tên sinh viên giảm dần
        allStudents.sort((a, b) =>
          a.studentName > b.studentName
            ? -1
            : a.studentName < b.studentName
            ? 1
            : 0
        );
        break;
      case 'addressASC':
        // Sắp xếp theo địa chỉ tăng dần
        allStudents.sort((a, b) =>
          a.address > b.address ? 1 : a.address < b.address ? -1 : 0
        );
        break;
      case 'addressDESC':
        // Sắp xếp theo địa chỉ giảm dần
        allStudents.sort((a, b) =>
          a.address > b.address ? -1 : a.address < b.address ? 1 : 0
        );
        break;
      case 'statusASC':
        // Sắp xếp theo trạng thái tăng dần
        allStudents.sort((a, b) =>
          a.status > b.status ? 1 : a.status < b.status ? -1 : 0
        );
        break;
      case 'statusDESC':
        // Sắp xếp theo trạng thái giảm dần
        allStudents.sort((a, b) =>
          a.status > b.status ? -1 : a.status < b.status ? 1 : 0
        );
        break;
    }
    // 4.set vào trong localStorage
    localStorage.setItem('allStudents', JSON.stringify(allStudents));
    // 5.Set lại currentPage
    currentPage = 1;
    // 6.Render lại data
    renderData(1, allStudents);
  }
  // Hàm lấy dữ liệu trên inputForm
  function getDataStudentForm() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let year = document.getElementById('year').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let sex = document.querySelector("input[name='gender']:checked").value;
    let status = document.querySelector("input[name='status']:checked").value;
    let courseId = document.getElementById('course').value;
    let classId = document.getElementById('itemClass').value;
    let studentObj = {
      studentId,
      studentName,
      year,
      address,
      email,
      phone,
      sex,
      status,
      courseId,
      classId,
    };
    return studentObj;
  }
  //Hàm reset form
  function resetStudentForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('year').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('male').checked = true;
    document.getElementById('studentExpect').checked = true;
  }
  // Hàm lấy index của một đối tượng bất kỳ theo mã lớp học
  function getStudentById(allStudents, studentId) {
    for (let index = 0; index < allStudents.length; index++) {
      if (allStudents[index].studentId == studentId) {
        return index;
      }
    }
    return -1;
  }
  // Khởi tạo hàm validate trả về giá trị true hoặc false
  function validateForm() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let year = document.getElementById('year').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    // Validate StudentId
    if (studentId === '') {
      alert('Vui lòng nhập mã số sinh viên');
      return false;
    }
    // Validate studentName
    if (studentName === '') {
      alert('Vui lòng nhập tên sinh viên');
      return false;
    }
    // Validate year
    if (year === '') {
      alert('Vui lòng nhập năm sinh');
      return false;
    }
    // Validate address
    if (address === '') {
      alert('Vui lòng nhập địa chỉ');
      return false;
    }
    // Validate email
    if (!email.match(emailPattern)) {
      alert('Vui lòng nhập email theo đúng định dạng');
      return false;
    }
    // Validate phone
    if (!phone.match(phonePattern)) {
      alert('Vui lòng nhập số điện thoại theo đúng định dạng');
      return false;
    }
    return true;
  }
  // Lấy ra mảng chứa tất cả các Object là class
  let allStudents = localStorage.getItem('allStudents')
    ? JSON.parse(localStorage.getItem('allStudents'))
    : [];
  document.onload = renderData(1, allStudents);