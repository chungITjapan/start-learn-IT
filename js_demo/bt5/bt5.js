let rate = prompt("Nhập vào hệ số lương");
rate = parseFloat(rate);
let basicSalary = prompt("Nhập vào lương cơ bản");
basicSalary = parseFloat(basicSalary);
let commission = prompt("Nhập vào tỉ lệ hoa hồng");
commission = parseFloat(commission);
let basic = (rate + commission)*basicSalary;
alert("Lương của bạn là "+basic)