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
  // Tạo sự kiện thay đổi cập nhập thành thêm mới
  let btnOpenModal = document.getElementById('btnOpenModal');
  btnOpenModal.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('btnSave').innerHTML = 'Thêm mới';
    document.getElementById('new-update').innerHTML = 'Thêm mới khóa học';
  });
  // Khởi tạo newCourseModal có công dụng đóng modal khi người dùng nhấp chuột vào nút thêm mới,
  // nó được xem như một đối tượng tùy ý
  var newCourseModal = new bootstrap.Modal(document.getElementById('newCourse'), {
    keyboard: false,
  });
  // #region Popup modal delete
  let btnDeleteCourse = document.getElementById('btnDeleteCourse');
  var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'), {
    keyboard: false,
  });
  btnDeleteCourse.onclick = function () {
    var courseId = btnDeleteCourse.getAttribute('course');
    deleteCourse(courseId);
    deleteModal.hide();
  };
  // #endregion
  //  Khởi tạo biến currentPage recordPerPage và tạo một cái cờ với action='Create'
  let currentPage = 1;
  let recordPerPage = 5;
  let action = 'Create';
  // Hàm renderData lên table
  function renderData(page, allCourses) {
    //1. Validate page
    let pageMax = getTotalPage(allCourses);
    if (page < 1) {
      // Vì trang nhỏ nhất là trang 1
      page = 1;
    }
    if (page > pageMax) {
      page = pageMax;
    }
    // 3.Render dữ liệu lên table ở trang page
    // 3.1. Truy cập vào phần tử tbody có id content
    let content = document.getElementById('content');
    content.innerHTML = '';
    // 3.2 Tính toán render dữ liệu lên table từ phần tử nào đến phần tử nào
    let indexMinOnPage = (page - 1) * recordPerPage;
    let indexMaxOnPage;
    // Nếu (page*recordPerPage) không lớn hơn allCourses.length tức là nó nhỏ hơn hoặc bằng,
    // trường hợp nó nhỏ hơn sẽ rời vào các trang(ví dụ: 2,3), trường hợp nó bằng sẽ rơi vào trang cuối cùng
    if (page * recordPerPage > allCourses.length) {
      indexMaxOnPage = allCourses.length;
    } else {
      indexMaxOnPage = page * recordPerPage;
    }
    // Ở đây lồng thêm 1 điều kiện là indexMaxOnPage > 0 thì mới render ra dữ liệu,còn không thì mình nên tạo ra 1 trang empty
    //tránh trường hợp mảng rỗng sẽ gây lỗi
    if (indexMaxOnPage) {
      // 3.3.Render dữ liệu với indexMinOnPage<=index<indexMaxOnPage
      for (let index = indexMinOnPage; index < indexMaxOnPage; index++) {
        content.innerHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${allCourses[index]?.courseId}</td>
        <td>${allCourses[index]?.courseName}</td>
        <td>${allCourses[index]?.courseTime}</td>
        <td>${allCourses[index]?.status}</td>
        <td>
            <button type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#newCourse" onclick="initUpdate('${
              allCourses[index]?.courseId
            }')"><i class="far fa-edit"></i></button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" 
            class="btn btn-secondary"  onclick="idOfYesButton('${
              allCourses[index]?.courseId
            }')" ><i class="far fa-trash-alt"></i></button>
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
  function idOfYesButton(courseId) {
    document.getElementById('btnDeleteCourse').setAttribute('course', courseId);
  }
  // Hàm tính tổng số trang trên tổng dữ liệu
  function getTotalPage(allCourses) {
    return Math.ceil(allCourses.length / recordPerPage);
  }
  // Hàm render dữ liệu theo trang khi click vào các trang
  function clickPage(page) {
    currentPage = page;
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    renderData(page, allCourses);
  }
  // Hàm previewPage
  function previewPage() {
    currentPage--;
    // Render lại dữ liệu lên table
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    renderData(currentPage, allCourses);
  }
  // Hàm nextPage
  function nextPage() {
    currentPage++;
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    renderData(currentPage, allCourses);
  }
  // Khởi tạo chức năng khi người dùng bấm Save thì sẽ tạo tạo mới dữ liệu hay là cập nhập dữ liệu
  let btnSave = document.getElementById('btnSave');
  btnSave.addEventListener('click', function (event) {
    // Chặn sự kiện mặc định submit form
    event.preventDefault();
    if (validateForm()) {
      if (action === 'Create') {
        createCourse();
      } else {
        updateCourse();
      }
      newCourseModal.hide();
    }
  });
  // Hàm thêm một danh mục sản phẩm
  function createCourse() {
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    //2.Lấy dữ liệu trên form nhập và gán vào biến newCourse
    let newCourse = getDataCourseForm();
    // 3.Thêm newCourse vào đầu danh sách
    allCourses.push(newCourse);
    // 4.set allCourses vào localStorage
    localStorage.setItem('allCourses', JSON.stringify(allCourses));
    // 5.renderData ở trang 1
    renderData(1, allCourses);
    // 6.resetForm khóa học
    resetCourseForm();
  }
  // Hàm lấy dữ liệu trên inputForm
  function getDataCourseForm() {
    let courseId = document.getElementById('courseId').value;
    let courseName = document.getElementById('courseName').value;
    let courseTime = document.getElementById('courseTime').value;
    let status = document.querySelector("input[type='radio']:checked").value;
    let course = {
      courseId,
      courseName,
      courseTime,
      status,
    };
    return course;
  }
  //Hàm reset form
  function resetCourseForm() {
    document.getElementById('courseId').value = '';
    document.getElementById('courseName').value = '';
    document.getElementById('courseTime').value = '';
    document.getElementById('active').checked = true;
  }
  // Cập nhập course
  function initUpdate(courseId) {
    document.getElementById('btnSave').innerHTML = 'Cập nhập';
    document.getElementById('new-update').innerHTML = 'Cập nhập khóa học';
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    //2. Lấy index của một đối tượng bất kỳ cần cập nhập
    let index = getCourseById(allCourses, courseId);
    //3. Hiển thị thông tin danh mục cần cập nhập
    document.getElementById('courseId').value = allCourses[index].courseId;
    document.getElementById('courseId').readOnly = true;
    document.getElementById('courseName').value = allCourses[index].courseName;
    document.getElementById('courseTime').value = allCourses[index].courseTime;
    if (allCourses[index].status === 'Hoạt động') {
      document.getElementById('active').checked = true;
    } else {
      document.getElementById('inActive').checked = true;
    }
    //4. Chuyển cờ action thành giá trị Edit
    action = 'Edit';
  }
  // Hàm updateCourse
  function updateCourse() {
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 2.Lấy dữ liệu trên form cập nhập và gán vào biến newUpdateCourse
    let newUpdateCourse = getDataCourseForm();
    // 3.Lấy index của đối tượng update
    let indexUpdate = getCourseById(allCourses, newUpdateCourse.courseId);
    // 4.Thay thế đối tượng cũ bằng đối tượng đã update
    if (indexUpdate > -1) {
      allCourses[indexUpdate] = newUpdateCourse;
    }
    // 5.Set allCourses vào localStorage
    localStorage.setItem('allCourses', JSON.stringify(allCourses));
    // 6.Chuyển cờ action thành giá trị Create
    action = 'Create';
    // 7.Render lại data của trang hiện tại sau khi người dùng cập nhập và bấm lại nút save
    renderData(currentPage, allCourses);
    // 8.Reset lại form
    resetCourseForm();
    // 9.Xóa bỏ đi thuộc tích readOnly của courseId
    document.getElementById('courseId').readOnly = false;
  }
  // Hàm deleteCourse
  function deleteCourse(courseId) {
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 2. Lấy index của đối tượng cần xóa
    let indexDelete = getCourseById(allCourses, courseId);
    // 3.Xóa đối tượng có chỉ số indexDelete ra khỏi mảng allCourses
    allCourses.splice(indexDelete, 1);
    // 4.Set allCourses vào localStorage
    localStorage.setItem('allCourses', JSON.stringify(allCourses));
    // 5.Render lại dữ liệu sau khi người dùng bấm nút xóa
    renderData(currentPage, allCourses);
  }
  // Tìm kiếm Khóa học theo tên
  let btnSearch = document.getElementById('btnSearch');
  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 2.Lấy ra giá trị đã được người dùng nhập vào khi tìm kiếm khóa học
    let searchCourse = document.getElementById('courseNameSearch').value;
    // 3.Tìm kiếm khóa học theo tên khóa học đã được nhập vào
    let arrSearchCourse = allCourses.filter((a) =>
      a.courseName.includes(searchCourse)
    );
    // 4.Render lại mảng arrSearch lên table
    renderData(1, arrSearchCourse);
  });
  // Hàm sắp xếp khóa học
  function handSortCourse() {
    // 1.Lấy dữ liệu allCourses từ localStorage
    let allCourses = localStorage.getItem('allCourses')
      ? JSON.parse(localStorage.getItem('allCourses'))
      : [];
    // 2.Lấy tiêu chí sắp xếp
    let sortTarget = document.getElementById('sort').value;
    // 3.Sắp xếp theo các tiêu chí
    switch (sortTarget) {
      case 'courseNameASC':
        // Sắp xếp theo tên khóa học tăng dần: sử dụng hàm sort
        allCourses.sort((a, b) =>
          a.courseName > b.courseName ? 1 : a.courseName < b.courseName ? -1 : 0
        );
        break;
      case 'courseNameDESC':
        // Sắp xếp theo tên khóa học giảm dần
        allCourses.sort((a, b) =>
          a.courseName > b.courseName ? -1 : a.courseName < b.courseName ? 1 : 0
        );
        break;
    }
    // 4.set vào trong localStorage
    localStorage.setItem('allCourses', JSON.stringify(allCourses));
    // 5.Render lại data
    renderData(1, allCourses);
  }
  // Hàm lấy index của một đối tượng bất kỳ theo mã khóa học
  function getCourseById(allCourses, courseId) {
    for (let index = 0; index < allCourses.length; index++) {
      if (allCourses[index].courseId == courseId) {
        return index;
      }
    }
    return -1;
  }
  // Khởi tạo hàm validate trả về giá trị true hoặc false
  function validateForm() {
    let courseId = document.getElementById('courseId').value;
    let courseName = document.getElementById('courseName').value;
    let courseTime = document.getElementById('courseTime').value;
    // Validate courseId
    if (courseId === '') {
      alert('Vui lòng nhập mã khóa học');
      return false;
    }
    // Validate courseName
    if (courseName === '') {
      alert('Vui lòng nhập tên khóa học');
      return false;
    }
    // Validate courseTime
    if (courseTime === '') {
      alert('Vui lòng nhập thời gian khóa học');
      return false;
    }
    return true;
  }
  let allCourses = localStorage.getItem('allCourses')
    ? JSON.parse(localStorage.getItem('allCourses'))
    : [];
  document.onload = renderData(1, allCourses);