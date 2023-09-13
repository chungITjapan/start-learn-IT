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
  // #region Khởi tạo newClassModal có công dụng đóng modal khi người dùng nhấp chuột vào nút thêm mới,
  // nó được xem như một đối tượng tùy ý
  var newClassModal = new bootstrap.Modal(document.getElementById('newClass'), {
    keyboard: false,
  });
  // #endregion
  // #region Popup modal delete
  let btnDeleteClass = document.getElementById('btnDeleteClass');
  var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'), {
    keyboard: false,
  });
  btnDeleteClass.onclick = function () {
    var classId = btnDeleteClass.getAttribute('class1');
    deleteClass(classId);
    deleteModal.hide();
  };
  //#endregion
  
  //  Khởi tạo biến currentPage recordPerPage và tạo một cái cờ với action='Create'
  let currentPage = 1;
  let recordPerPage = 5;
  let action = 'Create';
  // Hàm renderData lên table
  //1. Validate page
  function renderData(page, allClasses) {
    //1. Validate page
    let pageMax = getTotalPage(allClasses);
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
    if (page * recordPerPage > allClasses.length) {
      indexMaxOnPage = allClasses.length;
    } else {
      indexMaxOnPage = page * recordPerPage;
    }
    // 3.4 Render dữ liệu với indexMinOnPage<=index<indexMaxOnPage
    if (indexMaxOnPage) {
      for (let index = indexMinOnPage; index < indexMaxOnPage; index++) {
        content.innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${allClasses[index].classId}</td>
      <td>${allClasses[index].className}</td>
      <td>${allClasses[index].teacher}</td>
      <td>${allClasses[index].studentNumber}</td>
      <td>${allClasses[index].description}</td>
      <td>${allClasses[index].status}</td>
      <td>
          <button type="button"
          class="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#newClass" onclick="initUpdate('${
            allClasses[index].classId
          }')"><i class="far fa-edit"></i></button>
          <button type="button"
          class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="idOfYesButton('${
            allClasses[index].classId
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
  function idOfYesButton(classId) {
    document.getElementById('btnDeleteClass').setAttribute('class1', classId);
  }
  // Hàm tính tổng số trang trên tổng số lượng các lớp học
  function getTotalPage(allClasses) {
    return Math.ceil(allClasses.length / recordPerPage);
  }
  // Hàm render dữ liệu theo trang khi click vào các trang
  function clickPage(page) {
    currentPage = page;
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    renderData(page, allClasses);
  }
  // Hàm previewPage
  function previewPage() {
    currentPage--;
    // Render lại dữ liệu lên table
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    renderData(currentPage, allClasses);
  }
  // Hàm nextPage
  function nextPage() {
    currentPage++;
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    renderData(currentPage, allClasses);
  }
  
  // Khởi tạo chức năng khi người dùng bấm "Thêm mới" hay "Cập nhập" thì sẽ tạo tạo mới dữ liệu hay là cập nhập dữ liệu
  let btnSave = document.getElementById('btnSave');
  btnSave.addEventListener('click', function (event) {
    // Chặn sự kiện mặc định submit form
    event.preventDefault();
    if (validateForm()) {
      if (action === 'Create') {
        createClass();
      } else {
        updateClass();
      }
      newClassModal.hide();
    }
  });
  // #region Tạo ra một Combobox chứa các Course để người dùng chọn Course khi tạo mới lớp học
  let btnOpenModal = document.getElementById('btnOpenModal');
  btnOpenModal.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('btnSave').innerHTML = 'Thêm mới';
    document.getElementById('new-update').innerHTML = 'Thêm mới lớp học';
    document.getElementById('add-update').innerHTML =
      'Hãy chọn khóa học bạn muốn thêm mới';
    // 1. Lấy danh sách các khóa học được lưu trữ trong localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 2. Đẩy danh sách khóa học vào trong Combobox có id là course
    let courseComboBox = document.getElementById('course');
    courseComboBox.innerHTML = '';
    allCourses.forEach((course) => {
      // Đẩy ra 1 option trong select
      courseComboBox.innerHTML += `<option value="${course.courseId}">${course.courseName}</option>`;
    });
  });
  // #endregion
  // Hàm thêm một Lớp học
  function createClass() {
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2.Lấy dữ liệu trên form nhập và gán vào biến newClass
    let newClass = getDataClassForm();
    // 3.Thêm newClass vào đầu danh sách
    allClasses.push(newClass);
    //  4.set allClasses vào localStorage
    localStorage.setItem('allClasses', JSON.stringify(allClasses));
    // 7.renderData ở trang 1
    renderData(1, allClasses);
    // 8.resetForm lớp học
    resetClassForm();
  }
  // Cập nhập class
  function initUpdate(classId) {
    document.getElementById('btnSave').innerHTML = 'Cập nhập';
    document.getElementById('new-update').innerHTML = 'Cập nhập lớp học';
    document.getElementById('add-update').innerHTML =
      'Hãy chọn khóa học bạn muốn cập nhập';
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2.Lấy index của một đối tượng bất kỳ cần cập nhập
    let index = getClassById(allClasses, classId);
    // 3.Hiển thị thông tin danh mục cần cập nhập
    document.getElementById('classId').value = allClasses[index].classId;
    document.getElementById('classId').readOnly = true;
    document.getElementById('className').value = allClasses[index].className;
    document.getElementById('teacher').value = allClasses[index].teacher;
    document.getElementById('studentNumber').value =
      allClasses[index].studentNumber;
    document.getElementById('description').value = allClasses[index].description;
    if (allClasses[index].status === 'Chờ lớp') {
      document.getElementById('classExpect').checked = true;
    } else if (allClasses[index].status === 'Hoạt động') {
      document.getElementById('classActive').checked = true;
    } else {
      document.getElementById('classFinish').checked = true;
    }
    // 4.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 4. Đẩy danh sách khóa học vào trong Combobox
    let courseComboBox = document.getElementById('course');
    courseComboBox.innerHTML = '';
    allCourses.forEach((course) => {
      courseComboBox.innerHTML += `<option value="${course.courseId}">${course.courseName}</option>`;
    });
    // 6. Chuyển cờ action thành giá trị Edit
    action = 'Edit';
  }
  // Hàm updateCourse
  function updateClass() {
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2.Lấy dữ liệu trên form cập nhập và gán vào biến newUpdateClass
    let newUpdateClass = getDataClassForm();
    // 3.Lấy index của đối tượng update
    let indexUpdate = getClassById(allClasses, newUpdateClass.classId);
    // 4.Thay thế đối tượng cũ bằng đối tượng đã update
    if (indexUpdate > -1) {
      allClasses[indexUpdate] = newUpdateClass;
    }
    // 5.Set allClasses vào localStorage
    localStorage.setItem('allClasses', JSON.stringify(allClasses));
    // 6.Chuyển cờ action thành giá trị Create
    action = 'Create';
    // 7.Render lại data của trang hiện tại sau khi người dùng cập nhập và bấm lại nút save
    renderData(currentPage, allClasses);
    // 8.Reset lại form
    resetClassForm();
    // 9.Xóa bỏ đi thuộc tích readOnly của classId
    document.getElementById('classId').readOnly = false;
  }
  // Hàm deleteClass
  function deleteClass(classId) {
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2. Lấy index của đối tượng cần xóa
    let indexDelete = getClassById(allClasses, classId);
    // 3.Xóa Class
    allClasses.splice(indexDelete, 1);
    // 4.Set allClasses vào localStorage
    localStorage.setItem('allClasses', JSON.stringify(allClasses));
    // 5.Render lại dữ liệu sau khi người dùng bấm nút xóa
    renderData(currentPage, allClasses);
  }
  // Tìm kiếm lớp học theo tên
  let btnSearch = document.getElementById('btnSearchClass');
  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2.Lấy ra giá trị đã được người dùng nhập vào khi tìm kiếm lớp học
    let searchClass = document.getElementById('classNameSearch').value;
    // 3.Tìm kiếm lớp học theo tên lớp học đã được nhập vào
    let arrSearchClasses = allClasses.filter((a) =>
      a.className.includes(searchClass)
    );
    // 4.Render lại mảng  lên table
    renderData(1, arrSearchClasses);
  });
  // Hàm sắp xếp lớp học
  function handSortClass() {
    // 1.Lấy dữ liệu allClasses từ localStorage
    let allClasses = localStorage.getItem('allClasses')
      ? JSON.parse(localStorage.getItem('allClasses'))
      : [];
    // 2.Lấy tiêu chí sắp xếp
    let sortTarget = document.getElementById('sort').value;
    // 3.Sắp xếp theo các tiêu chí
    switch (sortTarget) {
      case 'classNameASC':
        // Sắp xếp theo tên lớp học tăng dần: sử dụng hàm sort
        allClasses.sort((a, b) =>
          a.className > b.className ? 1 : a.className < b.className ? -1 : 0
        );
        break;
      case 'classNameDESC':
        // Sắp xếp theo tên lớp học giảm dần
        allClasses.sort((a, b) =>
          a.className > b.className ? -1 : a.className < b.className ? 1 : 0
        );
        break;
      case 'statusASC':
        // Sắp xếp theo trạng thái tăng dần
        allClasses.sort((a, b) =>
          a.status > b.status ? 1 : a.status < b.status ? -1 : 0
        );
        break;
      case 'statusDESC':
        // Sắp xếp theo trạng thái giảm dần
        allClasses.sort((a, b) =>
          a.status > b.status ? -1 : a.status < b.status ? 1 : 0
        );
        break;
    }
    // 4.set vào trong localStorage
    localStorage.setItem('allClasses', JSON.stringify(allClasses));
    // 5.Render lại data
    renderData(1, allClasses);
  }
  // Hàm lấy dữ liệu trên inputForm
  function getDataClassForm() {
    let classId = document.getElementById('classId').value;
    let className = document.getElementById('className').value;
    let teacher = document.getElementById('teacher').value;
    let studentNumber = document.getElementById('studentNumber').value;
    let description = document.getElementById('description').value;
    let status = document.querySelector("input[type='radio']:checked").value;
    let courseId = document.getElementById('course').value;
    let classObj = {
      classId,
      className,
      teacher,
      studentNumber,
      description,
      status,
      courseId,
    };
    return classObj;
  }
  //Hàm reset form
  function resetClassForm() {
    document.getElementById('classId').value = '';
    document.getElementById('className').value = '';
    document.getElementById('teacher').value = '';
    document.getElementById('studentNumber').value = '';
    document.getElementById('description').value = '';
    document.getElementById('classExpect').checked = true;
  }
  // Hàm lấy index của một đối tượng bất kỳ theo mã lớp học
  function getClassById(allClasses, classId) {
    for (let index = 0; index < allClasses.length; index++) {
      if (allClasses[index].classId == classId) {
        return index;
      }
    }
    return -1;
  }
  // Khởi tạo hàm validate trả về giá trị true hoặc false
  function validateForm() {
    let classId = document.getElementById('classId').value;
    let className = document.getElementById('className').value;
    let teacher = document.getElementById('teacher').value;
    let studentNumber = document.getElementById('studentNumber').value;
    let description = document.getElementById('description').value;
    // Validate classId
    if (classId === '') {
      alert('Vui lòng nhập mã lớp học');
      return false;
    }
    // Validate className
    if (className === '') {
      alert('Vui lòng nhập tên lớp học');
      return false;
    }
    // Validate teacher
    if (teacher === '') {
      alert('Vui lòng nhập tên giáo viên');
      return false;
    }
    if (studentNumber === '') {
      alert('Vui lòng nhập sĩ số lớp học');
      return false;
    }
    if (description === '') {
      alert('Vui lòng mô tả lớp học');
      return false;
    }
    return true;
  }
  // Lấy ra mảng chứa tất cả các Object là class
  let allClasses = localStorage.getItem('allClasses')
    ? JSON.parse(localStorage.getItem('allClasses'))
    : [];
  document.onload = renderData(1, allClasses);