let studentManagementStore = [
    {
      courseId: 'C001',
      courseName: 'Javascript Fullstack',
      courseTime: 1200,
      status: 'Hoạt động',
      arrClass: [
        {
          classId: 'L001',
          className: 'JS230508',
          description: 'Lớp học Fukuoka',
          studentNumber: 20,
          teacher: 'Nguyễn Văn A',
          status: 'Chờ lớp', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV001',
              studentName: 'Lê Văn A',
              year: 1995,
              address: 'Phan Thiết',
              email: 'a@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: 'Chờ lớp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV002',
              studentName: 'Lê Văn B',
              year: 1994,
              address: 'Nghệ An',
              email: 'b@gmail.com',
              phone: '0123456798',
              sex: "Nữ",
              status: 'Chờ lớp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L002',
          className: 'JS230608',
          description: 'Lớp học Osaka',
          studentNumber: 19,
          teacher: 'Nguyễn Văn B',
          status: 'Hoạt động', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV003',
              studentName: 'Lê Văn C',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: 'Nam',
              status: 'Đang học', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV004',
              studentName: 'Lê Văn D',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nữ",
              status: 'Đang học', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L003',
          className: 'JS230708',
          description: 'Lớp học Nagoya',
          studentNumber: 18,
          teacher: 'Nguyễn Văn C',
          status: 'Chờ lớp', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV005',
              studentName: 'Lê Văn Q',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: 'Chờ lớp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV006',
              studentName: 'Lê Văn W',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nữ",
              status: 'Đang học', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
      ],
    },
    {
      courseId: 'C002',
      courseName: 'Java Fullstack',
      courseTime: 1000,
      status: 'Không hoạt động',
      arrClass: [
        {
          classId: 'L004',
          className: 'JS230508',
          description: 'Lớp học Fukuoka',
          studentNumber: 20,
          teacher: 'Nguyễn Văn A',
          status: 'Chờ lớp', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV007',
              studentName: 'Lê Văn A',
              year: 1995,
              address: 'Phan Thiết',
              email: 'a@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: 'Bảo lưu', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV008',
              studentName: 'Lê Văn B',
              year: 1994,
              address: 'Nghệ An',
              email: 'b@gmail.com',
              phone: '0123456798',
              sex: 'Nữ',
              status: 'Tốt nghiệp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L005',
          className: 'JS230608',
          description: 'Lớp học Osaka',
          studentNumber: 19,
          teacher: 'Nguyễn Văn B',
          status: 'Kết thúc', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV009',
              studentName: 'Lê Văn C',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: 'Nam',
              status: 'Chờ lớp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0010',
              studentName: 'Lê Văn D',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: 'Nữ',
              status: 'Bảo lưu', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L006',
          className: 'JS230708',
          description: 'Lớp học Nagoya',
          studentNumber: 18,
          teacher: 'Nguyễn Văn C',
          status: 'Kết thúc', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV009',
              studentName: 'Lê Văn Q',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: 'Nam',
              status: 'Chờ lớp', //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0012',
              studentName: 'Lê Văn W',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
      ],
    },
    {
      courseId: 'C003',
      courseName: 'Java Fullstack',
      courseTime: 1000,
      status: 'Không hoạt động',
      arrClass: [
        {
          classId: 'L007',
          className: 'JS230508',
          description: 'Lớp học Fukuoka',
          studentNumber: 20,
          teacher: 'Nguyễn Văn A',
          status: 'Kết thúc', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0013',
              studentName: 'Lê Văn A',
              year: 1995,
              address: 'Phan Thiết',
              email: 'a@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0014',
              studentName: 'Lê Văn B',
              year: 1994,
              address: 'Nghệ An',
              email: 'b@gmail.com',
              phone: '0123456798',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L008',
          className: 'JS230608',
          description: 'Lớp học Osaka',
          studentNumber: 19,
          teacher: 'Nguyễn Văn B',
          status: 'Hoạt động', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0015',
              studentName: 'Lê Văn C',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0016',
              studentName: 'Lê Văn D',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L009',
          className: 'JS230708',
          description: 'Lớp học Nagoya',
          studentNumber: 18,
          teacher: 'Nguyễn Văn C',
          status: 'Kết thúc', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0017',
              studentName: 'Lê Văn Q',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0018',
              studentName: 'Lê Văn W',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
      ],
    },
    {
      courseId: 'C004',
      courseName: 'Java Fullstack',
      courseTime: 1000,
      status: 'Không hoạt động',
      arrClass: [
        {
          classId: 'L0010',
          className: 'JS230508',
          description: 'Lớp học Fukuoka',
          studentNumber: 20,
          teacher: 'Nguyễn Văn A',
          status: 'Chờ lớp', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0019',
              studentName: 'Lê Văn A',
              year: 1995,
              address: 'Phan Thiết',
              email: 'a@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0020',
              studentName: 'Lê Văn B',
              year: 1994,
              address: 'Nghệ An',
              email: 'b@gmail.com',
              phone: '0123456798',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L0011',
          className: 'JS230608',
          description: 'Lớp học Osaka',
          studentNumber: 19,
          teacher: 'Nguyễn Văn B',
          status: 'Hoạt động', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0021',
              studentName: 'Lê Văn C',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0022',
              studentName: 'Lê Văn D',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
        {
          classId: 'L0012',
          className: 'JS230708',
          description: 'Lớp học Nagoya',
          studentNumber: 18,
          teacher: 'Nguyễn Văn C',
          status: 'Kết thúc', //1: chờ lớp, 2: hoạt động, 3: kết thúc
          arrStudent: [
            {
              studentId: 'SV0023',
              studentName: 'Lê Văn Q',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
            {
              studentId: 'SV0024',
              studentName: 'Lê Văn W',
              year: 1995,
              address: 'Hà Nội',
              email: 'c@gmail.com',
              phone: '0123456789',
              sex: "Nam",
              status: "Đình chỉ", //1: chờ lớp, 2: đang học, 3 bảo lưu, 4: đình chỉ, 5: tốt nghiệp
            },
          ],
        },
      ],
    },
  ];
  // Fix cứng mới mục đích để hiểu nghiệp vụ Login
  let userSystem = [
    {
      userId: 1,
      studentName:"Nguyễn Văn A",
      email: 'user1@gmail.com',
      password: 123456,
      status:'Đang hoạt động',
      address: 'VN',
    },
    {
      userId: 2,
      studentName:"Nguyễn Văn B",
      email: 'user2@gmail.com',
      password: 234567,
      status:'Đang bị khóa',
      address: 'JP',
    },
  ];
  localStorage.setItem(
    'studentManagementStore',
    JSON.stringify(studentManagementStore)
  );
  localStorage.setItem('userSystem', JSON.stringify(userSystem));
  // #region course table creation
  const allCourses = studentManagementStore.map((itemCourses) => {
    const { arrClass, ...restOfItemCourse } = itemCourses;
    return restOfItemCourse;
  });
  localStorage.setItem('allCourses', JSON.stringify(allCourses));
  // #endregion
  // #region class table creation
  const allClasses = [];
  studentManagementStore.forEach((course) => {
    const classesOfCourse = course?.arrClass || [];
    allClasses.push(
      ...classesOfCourse.map((item) => {
        const { arrStudent, ...restOfItem } = item;
        return { ...restOfItem, courseId: course.courseId };
      })
    );
  });
  localStorage.setItem('allClasses', JSON.stringify(allClasses));
  // #endregion
  // #region student table creation
  const allStudents = [];
  for (const course of studentManagementStore) {
    course.arrClass.forEach((itemClass) => {
      const studentsOfClasses = itemClass?.arrStudent || [];
      // console.log(studentsOfClasses);
      console.log(itemClass);
      allStudents.push(
        ...studentsOfClasses.map((item) => {
          return {
            ...item,
            courseId: course.courseId,
            classId: itemClass.classId,
          };
        })
      );
    });
  }
  localStorage.setItem('allStudents', JSON.stringify(allStudents));