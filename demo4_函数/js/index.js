"use strict";
//todo 函数的定义
//?课程4.1
//!es5
//*声明式
function run() {
    return "run";
}
//* 匿名函数
var run2 = function () {
    return "run2";
};
//!es6
//*声明式
function run3() {
    return "run3";
}
//*匿名函数
var run4 = function () {
    return "run4";
};
//*也可定义方法传参
function run5(name, age) {
    return "run5";
}
//console.log(run5("xiehao",28))
//? 课程4.2
//!es5中形参和实参可以不一样，但ts必须一样，否则就要配置可选参数,加个问号就可以可选可不选，可选参数必须配置到最后面
function run6(name, age) {
    return "run6";
}
//?课程4.3
//!es5中无法设置默认参数，es6和ts中可以设置默认参数
function run7(name, age) {
    if (age === void 0) { age = 20; }
    return "run7";
}
//?剩余参数 课程4.4
//!写法一
function run8() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    result.forEach(function (item) {
        sum += item;
    });
    return sum;
}
//console.log(run8(1,2,3))
//!写法二
function run9(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    result.forEach(function (item) {
        sum += item;
    });
    return sum;
}
console.log(run9(0, 2, 3));
function getInfo(result) {
    if (typeof result === "string") {
        console.log("姓名是" + result);
    }
    else {
        console.log("年龄是" + result);
    }
}
getInfo(20);
