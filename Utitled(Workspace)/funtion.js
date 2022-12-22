// let num1= Number(prompt("Enter first Number"));
// let num2= Number(prompt("Enter Secound Number"));

// function math(){
//     document.write("<br/> Result Mul is: "+(num1*num2))
//     document.write("<br/> Result Sum is : "+ (num1+num2))
//     document.write("<br/> Result Sub is: "+ (num1-num2))
//     document.write("<br/> Result  Div is: "+num1/num2)
// }


// math();

// let num1 = (Number(prompt("Enter the first number: ")));
// let num2 = (Number(prompt("Enter the secound number: ")));
// let num3 = (Number(prompt("Enter the third number: ")));
// let num4 = (Number(prompt("Enter the four number: ")));

// function result(){
//     document.write('Addition is: '+(num1+num2+num3+num4)+'</br>');
//     document.write('Substraction is: '+(num1-num2-num3-num4)+'</br>');
//     document.write('Multiplication is: '+(num1*num2*num3*num4)+'</br>');
//     document.write('Divison is: '+(num1/num2/num3/num4)+'</br>');
// }

// result();

// // without funtion

var num = 16;
document.write("<br/> Result is:" + num * num)
    var num = 25;
document.write("<br/> Result is:" + num * num)
    var num = 36;
document.write("<br/> Result is:" + num * num)


// //using funtion
function square(){
    var num = 16;
    document.write("<br/> Result is:" + num * num)
}

square();

// // parameterized funtion calling
function square_p(num){
document.write("<br/>parameterized funtion result is: +num * num")
}
square_p(10);