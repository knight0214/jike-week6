var num1 = ''; //用来存放第一组的数字
var num2 = ''; //用来存放第二组的数字
var numShow = ''; //用于存放显示的数字
var operator = '0'; //用来存放运算符
var open = 0; //用来监视运算符的点击情况0是未点击，1是已点击
var git = 0; //用来监视=键的点击情况
var div1 = document.getElementById('test1');
var div2 = document.getElementById('test2');

function addNum(i) {
    if (numShow == "NaN") {
        return false;
    }
    var num = document.getElementById(i).value;
    if (numShow[0] == "0" && numShow[1] != ".") {
        numShow=numShow.substring(1);
        div1.innerHTML = "0";
    }
    numShow=numShow+i;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于添加数字键

function addFlo() {
    if (numShow == "NaN") {
        return false;
    }
    var point = document.getElementById(".").value;
    for (var i = 0; i <= numShow.length; i++) {
        if (numShow[i] == ".") {
            return false;
        }
    }
    numShow=numShow+point;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);

} //用于添加小数点

function delNum() {
    numShow=numShow.substring(0,numShow.length-1);
    console.log(numShow.length);
    if (numShow.length == 0) {
        numShow = '0';
        div1.innerHTML = numShow;

    } else {
        div1.innerHTML = numShow;
    }
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于退格

function clearData() {
    num1 = '';
    num2 = '';
    numShow = '';
    operator = '0';
    open = 0;
    div1.innerHTML = '0';
    div2.innerHTML = '';
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于清除数据

function addNog() {
    if (numShow == "NaN") {
        return false;
    }
    var n=-1*eval(numShow);
    numShow=n.toString();
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于添加+/-

function getPow() {
    if (numShow == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = eval(numShow);
    var n = (Math.pow(a, 2)).toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于运算2次幂

function getSqrt() {
    if (numShow == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = eval(numShow);
    var n = (Math.sqrt(a)).toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于运算平方根

function getPi() {
    if (numShow == "NaN") {
        return false;
    }
    var a = (Math.PI).toString();
    numShow = a;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于输出pi

function getReci() {
    if (numShow == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = 1 / eval(numShow);
    var n = a.toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(n);
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于求倒数

function getSin() {
    if (numShow == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = eval(numShow);
    var n = (Math.sin(a)).toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于求sin值

function getCos() {
    if (numShow == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = eval(numShow);
    var n = (Math.cos(a)).toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于求cos

function getTan() {
    if (numShow[0] == "NaN") {
        return false;
    }
    if (numShow==''&&open==0) {
        numShow='0';
    }
    var a = eval(numShow);
    var n = (Math.tan(a)).toString();
    numShow = n;
    div1.innerHTML = numShow;
    if (open == 0) {
        num1 = numShow;
    } else {
        num2 = numShow;
    }
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于求tan

function operation(i) {
    if (numShow == "NaN") {
        return false;
    }
    var charCotent = document.getElementById(i).value;
    operator = charCotent;
    numShow = '';
    open = 1;
    div2.innerHTML = operator;
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于添加+,-,*,/,%运算符

function getResult() {
    if (numShow == "NaN") {
        return false;
    }
    var result;

    if (operator == '0') {
        result = eval(num1);
    }else if(num1==''){
        result =eval('0'+operator+num2);
    }else if (num2=='') {
        result = eval(num1+operator+num1);
    }else  {
        result = eval(num1 + operator + num2);
    }
    
    Math.formatFloat = function(f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;
        } //用于规避js浮点运算的精度影响
    var n = Math.formatFloat(result, 10);
    numShow= n.toString();
    div1.innerHTML = numShow;
    div2.innerHTML = '';
    num1 = numShow;
    num2 = '';
    open = 0;
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于获得结果
