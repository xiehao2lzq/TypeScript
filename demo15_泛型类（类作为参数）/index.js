/*
    定义一个User类；这个类的作用是映射数据库字段，然后定义一个MYsqlDb的类；这个类用于操作数据库；然后把User类作为参数传入到MysqlDb中
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = "xiehao";
u.password = "qwe";
var db = new MysqlDb();
db.add(u);
