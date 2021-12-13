//!装饰器 很强大 很有用的功能
//todo 类装饰器 扩展类的功能
function logClass(params:any){
    console.log(params)
    //!params就是当前类 
}

@logClass
class HttpClient{
    constructor(){
        
    }
    getData(){

    }
}