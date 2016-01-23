var num1 = []; //用来存放第一组的数字
var num2 = []; //用来存放第二组的数字
var numShow = []; //用于存放显示的数字
var operator = '0'; //用来存放运算符
var open = 0; //用来监视运算符的点击情况0是未点击，1是已点击
var git = 0; //用来监视=键的点击情况
var div1 = document.getElementById('test1');
var div2 = document.getElementById('test2');

function addNum(i) {
    if (numShow[0] == "NaN") {
        return false;
    }
    var num = document.getElementById(i).value;
    if (numShow[0] == "0" && numShow[1] != ".") {
        numShow.shift();
        div1.innerHTML = "0";
    }
    numShow.push(num);
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var point = document.getElementById(".").value;
    for (var i = 0; i <= numShow.length; i++) {
        if (numShow[i] == ".") {
            return false;
        }
    }
    numShow.push(point);
    div1.innerHTML = numShow.join('');
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
    numShow.pop();
    console.log(numShow.length);
    if (numShow.length == 0) {
        numShow = ['0'];
        div1.innerHTML = numShow.join('');

    } else {
        div1.innerHTML = numShow.join('');
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
    num1 = [];
    num2 = [];
    numShow = [];
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
    if (numShow[0] == "NaN") {
        return false;
    }
    if (numShow[0] == '-') {
        numShow.shift();
    } else {
        numShow.unshift('-');
    }
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = eval(numShow.join(''));
    var n = (Math.pow(a, 2)).toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = eval(numShow.join(''));
    var n = (Math.sqrt(a)).toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = (Math.PI).toString();
    numShow = a.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = 1 / eval(numShow.join(''));
    var n = a.toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = eval(numShow.join(''));
    var n = (Math.sin(a)).toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var a = eval(numShow.join(''));
    var n = (Math.cos(a)).toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    var a = eval(numShow.join(''));
    var n = (Math.tan(a)).toString();
    numShow = n.split('');
    div1.innerHTML = numShow.join('');
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
    if (numShow[0] == "NaN") {
        return false;
    }
    var charCotent = document.getElementById(i).value;
    operator = charCotent;
    numShow = [];
    open = 1;
    div2.innerHTML = operator;
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于添加+,-,*,/,%运算符

function getResult() {
    if (numShow[0] == "NaN") {
        return false;
    }
    var result;
    if (operator == '0') {
        result = eval(num1.join(''));
    } else {
        result = eval(num1.join('') + operator + num2.join(''));
    }

    Math.formatFloat = function(f, digit) {
            var m = Math.pow(10, digit);
            return parseInt(f * m, 10) / m;
        } //用于规避js浮点运算的精度影响
    var n = Math.formatFloat(result, 10);
    var resultS = n.toString();
    var i = resultS.split('');
    div1.innerHTML = i.join('');
    div2.innerHTML = '';
    num1 = i;
    num2 = [];
    numShow = i;
    open = 0;
    console.log(numShow);
    console.log(operator);
    console.log(num1);
    console.log(num2);
} //用于获得结果
