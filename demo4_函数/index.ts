//todo 函数的定义


//?课程4.1
//!es5
//*声明式
 function run(){
     return "run"
 }
 //* 匿名函数
 var run2 = function(){
     return "run2"
 }

 //!es6
 //*声明式
 function run3():string{
    return "run3"
 }
 //*匿名函数

 var run4 = function():string{
    return "run4"
 }

 //*也可定义方法传参

 function run5(name:string,age:number):string{
    return "run5"
 }
 //console.log(run5("xiehao",28))

 //? 课程4.2

 //!es5中形参和实参可以不一样，但ts必须一样，否则就要配置可选参数,加个问号就可以可选可不选，可选参数必须配置到最后面

 function run6(name:string,age?:number):string{
    return "run6"
 }

 //?课程4.3
 //!es5中无法设置默认参数，es6和ts中可以设置默认参数

 function run7(name:string,age:number = 20):string{
    return "run7"
 }

 //?剩余参数 课程4.4
//!写法一
 function run8(...result:number[]):number{
    var sum = 0
    result.forEach(item=>{
        sum += item
    })
    return sum
 }
 //console.log(run8(1,2,3))
 //!写法二
 function run9(a:number,...result:number[]):number{
    var sum = a
    result.forEach(item=>{
        sum += item
    })
    return sum
 }
 console.log(run9(0,2,3))

 //?函数重载 课程4.5
 //*java方法中的重载：重载指的是两个或两个以上的同名函数，但他们的参数不一样，这时候会出现函数重载的情况
 //*ts中的重载：通过为同一函数提供多个函数类型定义来实现多种功能目的
 //* ts为了兼容es5和es6重载的写法和java中有区别

 //!es5中出现同名方法,下面覆盖上面的


 //todo ts中的重载

 function getInfo(name:string):string
 function getInfo(age:number):string
 function getInfo(result:any):any{
     if(typeof result === "string"){
         console.log("姓名是"+result)
     }else{
        console.log("年龄是"+result)
     }
 }

 getInfo(20)