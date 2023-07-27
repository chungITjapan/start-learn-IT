let num1 = +prompt('nhap vao canh thu 1');
let num2 = +prompt('nhap vao canh thu 2');
let num3 = +prompt('nhap vao canh thu 3');

if (num1+num2>num3 && num1+num3>num2 && num2+num3>num1) {
    document.write('day la 1 tam giac va ');
    if (num1==num2 || num1==num3 || num2==num3) {
        document.write('day la tam giac can ');
    } else {
        console.log('day ko phai la tam giac can ');
    };

    if (num1*num1==num2*num2+num3*num3 || num2*num2==num1*num1+num3*num3 || num3*num3==num1*num1+num2*num2) {
        document.write('day la tam giac vuong');
    } else {
        console.log('day ko phai la tam giac vuong');
    };

    if (num1==num2 && num2==num3) {
        document.write('day la tam giac deu');
    } else {
        console.log('day ko phai la tam giac deu');
    };
}else {
    document.write('day khong phai la tam giac');
};