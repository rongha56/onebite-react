// 형변환 : 어떤 값의 타입을 다른 타입으로 변경하는 것
// 1. 묵시적 형 변환 : 개발자 직접 설정 없이도 JS엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환 : 개발자가 직접 함수 등을 이용하여 형 변환 일으킴
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

let num1 = 20;
let numtoStr1 = String(num1);
console.log(numtoStr1 + "입니다.");
