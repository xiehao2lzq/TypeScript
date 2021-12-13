/* 
!ts的数据类型
*ts中为了编码更规范，有利于维护，增加了类型校验
*布尔类型（Boolean）
*数字类型（number）
*字符串类型（string）
*数组类型（array）
*元组类型（tuple）
*枚举类型（enum）
*任意类型（any）
*null、undefined；void、never类型
*/
//todo 布尔类型 boolean，只能是true或者false

var flag:boolean = true
console.log(flag)
//todo 数字类型 number,只能是数字，不分整形和浮点型

var a:number = 123
console.log(a)

//todo 字符串类型 只接受字符串

var str:string = "学习typescript"
console.log(str)

// todo 数组类型   两种方式
//!方式一
let arr:number[] = [1,2,3,4]
console.log(arr)

let arr2:any[] = [1,"2",true]
console.log(arr2)
//!方式二
let arr3:Array<number> = [1,2,3]
console.log(arr3)


//todo 元祖类型 tuple 属于数组的一种
 let arr4:[string,number,boolean] = ["1",2,true]
 console.log(arr4)

//todo 枚举类型 定义标识符用

//staus 1表示true -1表示false

enum state {success = 1,error = -1}

var s:state = state.success

console.log(s)


//todo 任意类型

var num2:any = 123

num2 = "123"

//todo null 和 undefined 其他（never类型）数据的子类型
var num3:number | undefined
console.log(num3)

 var num4:number | undefined | null

 num4 = null

 console.log(num4)

 //todo void类型表示没有任何类型，一般用于定义方法的时候时候方法没有返回值
 //!es5
/* function run(){
    console.log()
} */
//!es5
function run():void{
    console.log(111)
}

//todo never是其他类型 （包括undefined 和 null）的子类型，代表从未出现的值，这意味着声明never的变量只能被never类型所赋值

/* 

    var a:undefined

    a = undefined


*/

var err:never

err = (()=>{
    throw new Error('错错')
})()