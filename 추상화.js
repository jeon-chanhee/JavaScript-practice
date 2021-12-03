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
function myFuction() {
    let x = 3;
    console.log(x);
}

let x = 3;
console.log(x);
