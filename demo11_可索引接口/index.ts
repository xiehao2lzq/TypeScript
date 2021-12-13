//todo 可索引接口:数组对象的约束（不常用）

//*ts中对数组的约束
// var arr:number[] = [1,2]
// var arr2:Array<string> = ["1","2"]


//*可索引接口对数组对象的约束
// interface UserArr{
//     [index:number]:string
// }
// var arr3:UserArr = ["qwe"]

// interface UserObj{
//     [index:string]:string
// }

// var obj:UserObj = {
//     name:"20"
// }

//*类类型接口：对类的约束 和抽象类有点相似

interface Animal{
    name:string;
    eat(str:string):void
}

class Dog implements Animal{
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(food:string):void{
        console.log(this.name+food)
    }
}

var d = new Dog("小狗")

d.eat("rourou")