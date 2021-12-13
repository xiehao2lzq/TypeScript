/* 
*功能：定义一个操作数据库的库 支持Mysql Msssql MongoDb
*要求：1、这三个库都有 add updata delete get方法
*注意：约束统一的规范、以及代码的重用
*解决方法：要约束规范所以要定义接口，要代码重用所以用到泛型
*1、接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
*2、泛型 通俗理解：泛型就是解决 类 接口 方法 的复用性
*/

interface DBI<T>{
    add(info:T):boolean;
    delete(id:number):boolean;
    updata(info:T,id:number):boolean;
    get(id:number):any[]
}

//todo 定义一个操作mysql数据库的类 
//!注意：要实现泛型接口 这个类也应该是一个泛型类
class Mysql<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    updata(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}
//todo 定义mssql的数据库的类
class MsSqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    updata(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}

//todo 操作用户表 定义一个User类和数据表做映射

class User{
    username:string |undefined;
    password:string |undefined;
}

var u = new User()
u.username = "xxxx"
u.password = "xxx"

var mysql = new Mysql<User>()
mysql.add(u)

