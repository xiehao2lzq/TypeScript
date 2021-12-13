var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.showAge = function () {
        return Person.age;
    };
    Person.age = 20;
    return Person;
}());
console.log(Person.showAge());
