let month = Number(prompt("Nhập vào tháng"));
let year = Number(prompt("Nhập vào năm"));

let days = 31;

switch(month){
    case 4:
    case 6:    
    case 9:
    case 11:
        days = 30;
        break;    

};