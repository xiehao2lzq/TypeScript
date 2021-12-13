//todo 泛型接口

//*函数类型接口（方法类型接口）
/* interface ConfigFn{
    (value1:string,value2:string):string;
}

var setData:ConfigFn = function(name:string,sex:string):string{
    return `姓名：${name}；性别：${sex}`
} */

//*泛型接口 方法一

/* interface ConfigFn{
    <T>(value:T):T;
}

var setData:ConfigFn = function<T>(value:T):T{
    return value
}

setData<string>("123") */
//*方法二
interface ConfigFn<T>{
    (value:T):T
}

function setData<T>(value:T):T{
    return value
}

var maySetData:ConfigFn<string> = setData

maySetData("xxx")