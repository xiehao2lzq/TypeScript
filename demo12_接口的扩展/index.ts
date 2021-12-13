//todo 接口的扩展 ：接口的继承
//*接口的简单继承
/* interface Animal{
    eat():void
}
interface Person extends Animal{
    work():void
}

class Web implements Person{
    public name:string;

    constructor(name:string){
        this.name = name
    }

    eat(){

    }

    work(){
        console.log(`xiehao写程序`)
    }
}

var w = new Web("xzx")
w.work() */

//*
interface Animal{
    eat():void
}
interface Person extends Animal{
    work():void
}

class Programer{
    public name:string;

    constructor(name:string){
        this.name = name
    }

    code(code:string){
        console.log(`${this.name}code${code}`)
    }

    //!父类和子类必须有一个使用接口的方法
    eat(){

    }

    
}
//!类的继承和接口的继承相结合
class Web extends Programer implements Person{
    public name:string;

    constructor(name:string){
        super(name)
    }

    work(){
        console.log(`xiehao写程序`)
    }
    
}