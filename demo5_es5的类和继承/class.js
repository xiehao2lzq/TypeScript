//?es5中的类
//?1、最简单的类
/* function Person(){
    this.name = "xiehao"
    this.age = 20
}
var p = new Person()
console.log(p.name) */

//?2、 构造函数和原型链增加方法

/* function Person(){
    this.name = "xiehao"
    this.age = 20
    //!构造函数内部的方法，实例方法
    this.run = function(){
        console.log(this.name)
    }
}
//!原型链增加方法
//*原型链的属性方法会被多个实例共享，构造函数不会
Person.prototype.run2 = function(){
    console.log(this.age)
}
var p = new Person()
p.run2() */

//?3、类里的静态方法
/* function Person(){
    this.name = "xiehao"
    this.age = 20
    //!构造函数内部的方法，实例方法
    this.run = function(){
        console.log(this.name)
    }
}
//!静态方法
Person.getInfo = function(){
    console.log(this)
}
Person.getInfo() */
//?4、es5的继承
//*构造函数继承
/* function Person(){
    this.name = "xiehao"
    this.age = 20
    //!构造函数内部的方法，实例方法
    this.run = function(){
        console.log(this.name)
    }
}
//!原型链增加方法
//*原型链的属性方法会被多个实例共享，构造函数不会
Person.prototype.run2 = function(){
    console.log(this.age)
}
Person.prototype.sex = "man"
var p = new Person()
p.run2()

//*Son类，继承Person类 
function Son(){
    Person.call(this)//!利用call方法改变this指向，对象冒充实现继承,只能继承构造函数里的属性和方法
}

var s  = new Son

console.log(s.name) */

//?5、原型链继承

/* function Person(){
    this.name = "xiehao"
    this.age = 20
    //!构造函数内部的方法，实例方法
    this.run = function(){
        console.log(this.name)
    }
}
//!原型链增加方法
//*原型链的属性方法会被多个实例共享，构造函数不会
Person.prototype.run2 = function(){
    console.log(this.age)
}
Person.prototype.sex = "man"
function Son(){

}
//!原型链继承，既可以继承构造函数的属性方法，也可以继承原型链的属性方法
Son.prototype = new Person()


var s = new Son()
console.log(s.age) */
//?6、原型链继承的缺点
/* function Person(name,age){
    this.name = name
    this.age = age
    //!构造函数内部的方法，实例方法
    this.run = function(){
        return this.name
    }
}
//!原型链增加方法
//*原型链的属性方法会被多个实例共享，构造函数不会
Person.prototype.run2 = function(){
    console.log(this.age)
}
Person.prototype.sex = "man"
function Son(name,age){

}
//!原型链继承，既可以继承构造函数的属性方法，也可以继承原型链的属性方法

Son.prototype = new Person()

//!缺点没办法传参
var s = new Son("xiehao",20)
console.log(s.run()) */

//?7、组合继承，组合继承方式既原型链+构造函数继承
function Person(name,age){
    this.name = name
    this.age = age
    //!构造函数内部的方法，实例方法
    this.run = function(){
        return this.name
    }
}
//!原型链增加方法
//*原型链的属性方法会被多个实例共享，构造函数不会
Person.prototype.run2 = function(){
    console.log(this.age)
}
Person.prototype.sex = "man"
function Son(name,age){
    Person.call(this,name,age)
}
//!原型链继承，既可以继承构造函数的属性方法，也可以继承原型链的属性方法

Son.prototype = new Person()

//!缺点没办法传参
var s = new Son("xiehao",20)
console.log(s.run())

