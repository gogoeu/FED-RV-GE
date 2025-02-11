// 기능, 데이터처리 어떻게 했는지, 화면에 어떻게 뿌려졌는지, 신경쓴 부분
parse 문자형을 이용하기 위해

문자형으로만 들어가서 parse 했다가
꺼낼때 stringify해서 꺼내서 씀

/* 
위시리스트, 검색
    빈값 여부 검사하기

    JSON.parse를 이용해 로컬스토리지에 입력한 아이디가 있는지 찾아본다
    일치하는 아이디가 있는지 여부 검사


    parse 문자형을 이용하기 위해

    문자형으로만 들어가서 parse 했다가
    꺼낼때 stringify해서 꺼내서 씀


     // '이미 사용중인 아이디입니다' 와 같은 메시지출력
          if (localStorage.getItem("mem-data")) {
            // (1) 로컬스 'mem-data'가 있는 경우 파싱함
            let temp = JSON.parse(localStorage.getItem("mem-data"));
            // (2) 파싱된 로컬스는 배열이므로 find로
            // 현재 입력한 아이디가 있는지 찾아본다!
            // 배열.find(v=>{if(조건){return true}})
            // -> true가 리턴되면 해당배열값이 저장됨
            // 그.러.나... 없으면 값이 그냥 undefined로 남음
            let result = temp.find((v) => {
              console.log(v.userid);
              // cv는 입력된 아이디값
              // 완전히 일치하는 아이디 존재여부를 검사!
              if (v.userid == cv) return true;
            }); /////// find ///////
*/


비번 보이게 안보이게
$("#mpw").attr("type", eyeNum ? "text" : "password");
      눈알 CSS 디자인 전환 (안보일때는 흐리게 중간줄표시)
      $(e.target).css({
        textDecoration: eyeNum ? "none" : "line-through",
        opacity: eyeNum ? 1 : 0.5,
      });


      정규식
      case "mid": // 아이디
      reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;

      case "mpw": // 비밀번호
      reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

      case "eml": // 이메일
      reg =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;




유효성검사
JSON.parse localStorage 이용해 아이디 검사해 로그인

