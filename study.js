/************************************************************************* 
1. 스코프
var, let, const
es6에서는 var 사용을 지양하고 있음
let vs const 

스코프란?
변수에 접근할 수 있는 범위
전역 : 최상위 범위, 코드 어디에서든 접근 가능
지역 : 전역 하위 범위 해당 스코프에서만 변수 접근 가능

js는 함수레벨 스코프이다 (if, for문 등은 비블록 스코프임)
그래서 나온것이 let, const
let, const는 블록레벨 스코프 => {} 요고 단위!

하위 스코프는 상위 스코프를 참조할 수 있다
반대로 상위스코프는 하위스코프 참조 안됨

let vs const
const : 변화하지 않는 변수를 선언하고 싶을 때

tip : 변수명은 길더라도 어떤것을 의미하는지 정확하게 명시하기
변수는 명사, 메소드는 동사가 들어갈 것
변수명, 메소드 명으로 개발자 실력이 드러남...! 꼭 잘 짓기
물론 이런거만이 다는 아니지만 의외로 소소한 것이 더 중요하지
*************************************************************************/

var x = 0;
{
  var x = 1;
  console.log(x); //1
}
console.log(x); //1

let y = 2;
{
  let y = 3;
  console.log(y); //3
}
console.log(y);//2

// //변수의 이름은 같지만 스코프가 달라 다른 변수임
//상하위 스코프 참조 여부
let z = 10;
let func = () => {
  let z = 100;
  console.log(z);//100
  // console.log(a); //a is not defined
  
  let nestedFunc = () => {
    let a=1000;
    console.log(a); //1000
    console.log(z);//100
  }
  nestedFunc();
  // console.log(a); // a is not defined
}
func();
console.log(z);//10

/************************************************************************* 
2. 호이스팅

호이스팅이 나오게 된 배경
변수 선언 시 var를 사용하게 되면 발생
현재 es6에서는 let, const를 사용하기에 호이스팅이 생기진 않지만
다른 이론들과 겹치는 부분이 있기에 간략하게 정리하고 넘어갈 것이다

호이스팅이란? 
모든 선언문(var, function 등) 해당 스코프의 선두로 옮겨진 것 처럼 동작하는 특성

변수 생성단계
var : 선언+ 초기화 단계(undefined) -> 할당 단계(값 존재)
let : 선언(referenceError) -> 일시적 사각지대(referenceError) -> 초기화(undefined) -> 할당(값 존재)

선언 : 변수 객체에 변수 등록. 스코프가 참조하는 대상이 됨
초기화  : 변수 객체에 등록된 변수를 메모리에 할당
할당 : 초기화된 변수에 실제 값을 할당

참고
함수 표현식은 변수에 함수를 참조!
*************************************************************************/

console.log(foo); //undefined 원래라면 referenceError가 나와야 함 => 호이스팅!!
var foo =123;
console.log(foo); //123

{
  var foo =456;
}
console.log(foo); //456

// console.log(bar); //before initialized
let bar=123;
console.log(bar);//123
