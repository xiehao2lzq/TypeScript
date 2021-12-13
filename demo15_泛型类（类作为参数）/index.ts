/* 
    定义一个User类；这个类的作用是映射数据库字段，然后定义一个MYsqlDb的类；这个类用于操作数据库；然后把User类作为参数传入到MysqlDb中
*/

/* class User{
    username:string | undefined;
    password:string | undefined;
}


class MysqlDb{
    add(user:User):boolean{
        console.log(user)
        return true
    }
}

var u = new User()
u.username = "xiehao"
u.password = "qwe"
var db = new MysqlDb()

db.add(u) */

/* class News{
    title:string | undefined;
    cantent:string | undefined;
}

class MysqlDb{
    add(news:News):boolean{
        console.log(news)
        return true
    }
}

var n = new News()
n.title = "xiehao"
n.cantent = "qwe"
var db = new MysqlDb()

db.add(n) */

//!以上会造成代码重复


//todo 操作数据库的泛型类
class MysqlDb<T>{
    add(info:T):boolean{
        console.log(info);
        return true;
    }
}

//*想给User表增加数据

//* 1、定义一个User类 和数据库进行映射

class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User()
u.username = "xiehao"
u.password = "qwe" 

var db = new MysqlDb<User>()
db.add({username:undefined,password:undefined})
db.add(u)