//todo 可索引接口:数组对象的约束（不常用）
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        console.log(this.name + str);
    };
    return Dog;
}());
var d = new Dog("小狗");
d.eat("rourou");
