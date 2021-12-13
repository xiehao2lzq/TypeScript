
/* 
*接口的作用：接口是一种规范的定义，定义了行为和动作的规范，起到限制作用
*/
//todo 属性接口 对json约束

/* function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj); */

  //!接口实现上述
  interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  //todo 可选属性
  interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});

  //todo 方法类型接口 也就是函数类型接口
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }