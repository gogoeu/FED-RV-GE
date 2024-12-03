// 영화정보 객체 JS - JS4-1.object.js

// 탐쌤의 오브젝트!
// -> 변경가능하게 let으로 선언한다!
let ygeObj = {};
// 오브젝트 형만 만들고 객체내용은 아래에서!

// 1. 영화제목
ygeObj.title = "퓨리오사: 매드맥스 사가";
// 2. 감독
ygeObj.director = "조지 밀러";
// 3. 배우
ygeObj.actor = "안야 테일러 조이, 크리스 헴스워스";
// 4. 장르
ygeObj.genre =
  " 액션";
// 5. 관람가
ygeObj.ratings = "15세";
// 6. 예고편
ygeObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("NXHOhQOCB6g");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", ygeObj);
