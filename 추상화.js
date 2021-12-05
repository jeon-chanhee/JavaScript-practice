// 할당 연산자

let name = '코드잇';
let x = 5;

x = x - 2;

function square(x) {
    return x * x;
}

console.log(square(3));

// 옵셔널 파라미터
function introduce(name, age, nationality = '한국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이가 ${age}입니다.`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇',4,'미국');
console.log('');
introduce('코드잇',4);


// Scope: 범위, 영역
//function myFuction() {
//    let x = 3;
//    console.log(x);
//}
//
//let x = 3;
//console.log(x);

// 상수 (constant)

const pi = 3.14; // 원주율
const radius = 0; // 반지름


// 실습문제

// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.
let adultTag = "삑!";
let teenagerTag = "삑삑!";
let transferTag = "환승입니다.";
let errorTag = "삑삑삑!";


function tagNotification(tagCase) {

        console.log(`${tagCase}`)
}

// 아래에 tagCase파라미터를 가지는 tagNotification 함수를 작성해 주세요.


// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);

