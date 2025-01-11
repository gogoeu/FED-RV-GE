// 공통처리 JS - common.js

// 공통데이터 가져오기
import comData from "../data/common_data.js";
    
// 도깨비 GNB 데이터 불러오기
import gnbData from "../data/gnb_data.js";

// 링크 시스템 함수 불러오기
import linksysFn from "./linksys.js";

// 실행함수 만들고 내보내기 ///
export default function comFn(){
    // console.log(comData);

    // 상단/하단 공통 소스 제이쿼리로 넣기
    $('body')
    .prepend(comData.topArea)
    .append(comData.footerArea);

// 0. GNB 데이터 바인딩하기
$(".gnb").html(`
   <a href="#">로그인</a>
   <a href="#">회원가입</a>
   
  `);

  // 링크 시스템 함수 호출 실행!
  linksysFn();

} ////////// comFn 함수 ////////////
