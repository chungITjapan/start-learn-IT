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
  //  Khởi tạo biến currentPage recordPerPage và tạo một cái cờ với action='Create'
  let currentPage = 1;
  let recordPerPage = 5;
  let action = 'Create';
  // Hàm renderData lên table
  //1. Validate page
  function renderData(page, userSystem) {
    //1. Validate page
    let pageMax = getTotalPage(userSystem);
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
    if (page * recordPerPage > userSystem.length) {
      indexMaxOnPage = userSystem.length;
    } else {
      indexMaxOnPage = page * recordPerPage;
    }
    // 3.4 Render dữ liệu với indexMinOnPage<=index<indexMaxOnPage
    if (indexMaxOnPage) {
      for (let index = indexMinOnPage; index < indexMaxOnPage; index++) {
        content.innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${userSystem[index].email}</td>
      <td>${userSystem[index].password}</td>
      <td>${userSystem[index].studentName}</td>
      <td>${userSystem[index].status}</td>
      <td>
          <button type="button"
          class="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#lockModal" onclick="idOfYesButtonLock('${
            userSystem[index].userId
          }')"><i class="fa-solid fa-lock"></i></button>
          <button type="button"
          class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#unlockModal" onclick="idOfYesButtonUnlock('${
            userSystem[index].userId
          }')"><i class="fa-solid fa-unlock"></i></i></button>
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
  // Hàm Khóa tài khoản
  function lockAccount(userId) {
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    // 2.Lấy index của đối tượng cần khóa
    let index = getAccountById(userSystem, userId);
    // 3.Gán trạng thái có giá trị là "Đang bị khóa"
    userSystem[index].status = 'Đang bị khóa';
    // 4.set vào trong localStorage
    localStorage.setItem('userSystem', JSON.stringify(userSystem));
    // 5.Render lại dữ liệu
    renderData(1, userSystem);
  }
  //Hàm truyền vô id cho nút "Có" của Button Lock
  function idOfYesButtonLock(userId) {
    document.getElementById('btnLock').setAttribute('lock', userId);
  }
  // #endregion
  // #region Popup modal lock
  let btnLock = document.getElementById('btnLock');
  var lockModal = new bootstrap.Modal(document.getElementById('lockModal'), {
    keyboard: false,
  });
  btnLock.onclick = function () {
    var userId = btnLock.getAttribute('lock');
    lockAccount(userId);
    lockModal.hide();
  };
  //#endregion
  // Hàm Mở Khóa tài khoản
  function unlockAccount(userId) {
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    // 2.Lấy index của đối tượng cần khóa
    let index = getAccountById(userSystem, userId);
    // 3.Gán trạng thái có giá trị là "Đang hoạt động"
    userSystem[index].status = 'Đang hoạt động';
    // 4.set vào trong localStorage
    localStorage.setItem('userSystem', JSON.stringify(userSystem));
    // 5.Render lại dữ liệu
    renderData(1, userSystem);
  }
  //Hàm truyền vô id cho nút "Có" của Button unlock
  function idOfYesButtonUnlock(userId) {
    document.getElementById('btnUnlock').setAttribute('unlock', userId);
  }
  // #endregion
  // #region Popup modal unlock
  let btnUnlock = document.getElementById('btnUnlock');
  var unlockModal = new bootstrap.Modal(document.getElementById('unlockModal'), {
    keyboard: false,
  });
  btnUnlock.onclick = function () {
    var userId = btnUnlock.getAttribute('unlock');
    unlockAccount(userId);
    unlockModal.hide();
  };
  //#endregion
  // Hàm tính tổng số trang trên tổng số lượng các lớp học
  function getTotalPage(userSystem) {
    return Math.ceil(userSystem.length / recordPerPage);
  }
  // Hàm render dữ liệu theo trang khi click vào các trang
  function clickPage(page) {
    currentPage = page;
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    renderData(page, userSystem);
  }
  // Hàm previewPage
  function previewPage() {
    currentPage--;
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    renderData(currentPage, userSystem);
  }
  // Hàm nextPage
  function nextPage() {
    currentPage++;
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    renderData(currentPage, userSystem);
  }
  
  // #region Tìm kiếm tài khoản theo email
  let btnSearch = document.getElementById('btnSearchAccount');
  btnSearch.addEventListener('click', function (event) {
    event.preventDefault();
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    // 2.Lấy ra giá trị đã được người dùng nhập vào khi tìm kiếm email
    let searchAccount = document.getElementById('accountNameSearch').value;
    // 3.Tìm kiếm lớp học theo tên lớp học đã được nhập vào
    let arrSearchEmail = userSystem.filter((a) =>
      a.email.includes(searchAccount)
    );
    // 4.Set lại currentPage
    currentPage = 1;
    // 5.Render lại mảng  lên table
    renderData(1, arrSearchEmail);
  });
  // #endregion
  // Hàm sắp xếp tài khoản
  function handSortAccount() {
    // 1.Lấy dữ liệu userSystem từ localStorage
    let userSystem = localStorage.getItem('userSystem')
      ? JSON.parse(localStorage.getItem('userSystem'))
      : [];
    // 2.Lấy tiêu chí sắp xếp
    let sortTarget = document.getElementById('sort').value;
    // 3.Sắp xếp theo các tiêu chí
    switch (sortTarget) {
      case 'emailNameASC':
        // Sắp xếp theo email tăng dần: sử dụng hàm sort
        userSystem.sort((a, b) =>
          a.email > b.email ? 1 : a.email < b.email ? -1 : 0
        );
        break;
      case 'emailNameDESC':
        // Sắp xếp theo email giảm dần
        userSystem.sort((a, b) =>
          a.email > b.email ? -1 : a.email < b.email ? 1 : 0
        );
        break;
      case 'statusASC':
        // Sắp xếp theo trạng thái tăng dần
        userSystem.sort((a, b) =>
          a.status > b.status ? 1 : a.status < b.status ? -1 : 0
        );
        break;
      case 'statusDESC':
        // Sắp xếp theo trạng thái giảm dần
        userSystem.sort((a, b) =>
          a.status > b.status ? -1 : a.status < b.status ? 1 : 0
        );
        break;
    }
    // 4.set vào trong localStorage
    localStorage.setItem('userSystem', JSON.stringify(userSystem));
    // 5.Set lại currentPage
    currentPage = 1;
    // 6.Render lại data
    renderData(1, userSystem);
  }
  // Hàm lấy index của một đối tượng bất kỳ theo mã lớp học
  function getAccountById(userSystem, userId) {
    for (let index = 0; index < userSystem.length; index++) {
      if (userSystem[index].userId == userId) {
        return index;
      }
    }
    return -1;
  }
  // Lấy dữ liệu userSystem từ localStorage
  let userSystem = localStorage.getItem('userSystem')
    ? JSON.parse(localStorage.getItem('userSystem'))
    : [];
  document.onload = renderData(1, userSystem);