//todo ts中的类
/* class Person{
    name:string;//*属性   前面省略的public关键字
    constructor(name:string){ //*构造函数 实例化类时候触发的方法
        this.name = name
    }
    run():void{
        console.log(this.name)
    }
}

var p = new Person("张三")

p.run() */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
} */
//todo 继承
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "xxx"; //*属性   前面省略的public关键字
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
        //console.log(this)
    }
    return Son;
}(Person));
var son = new Son("321");
son.run();
console.log(son.__proto__);
/* class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);//!继承父类的方法
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34); */
//todo 类的修饰符
/*
    *puclic 共有 ，类外面，子类中都可访问
    *protected 保护类型 类里面 子类中可以访问，类外面不行
    *private 私有 类里面可以访问 其他不行
*/
