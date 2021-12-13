/* 
todo 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
todo 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
!通俗理解 ：泛型就是解决类 、 接口 、方法的复用性；以及对不特定数据类型的支持 
*/
//!只能返回number类型
// function identity(arg: number): number {
//     return arg;
// }
//!使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
// function identity(arg: any): any {
//     return arg;
// }

//*泛型 可以支持不特定的数据类型 要去传入的参数和返回值一致

//*T表示泛型。具体是什么类型是调用这个方法时候决定的


/* function getData<T>(value:T):T{
    return value
}

getData<number>(123) */

//todo 泛型类 实现最小堆算法，需要同时返回数字和字符串两种类型。 通过类的泛型来实现

/* class MInClass{
    public list:number[];
    add(num:number){
        this.list.push(num)
    }
    min():number{
        var minnum = this.list[0]
        this.list.forEach(item=>{
            minnum = minnum<item?minnum:item
        })
        return minnum
    }
}

var m = new MInClass()

m.add(2)
m.add(12)
m.add(5)
m.add(6)
m.add(1)
m.min() */
//*类的泛型

class MInClass<T>{
    public list:T[];
    add(num:T):void{
        this.list.push(num)
    }
    min():T{
        var minnum = this.list[0]
        this.list.forEach(item=>{
            minnum = minnum<item?minnum:item
        })
        return minnum
    }
}

var m1 = new MInClass<number>()//!实例化类 并指定了类的T代表类型是number


m1.add(2)

m1.add(12)

m1.add(5)

m1.add(6)

m1.add(1)

m1.min()