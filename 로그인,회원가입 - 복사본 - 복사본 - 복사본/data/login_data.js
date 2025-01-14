// 서브 페이지 요소 데이터 JS - sub_data.js

export default {
  // 로그인 소스
  login: ` 
  <p class="stit">로그인</p>
    <!-- 2-3.컨텐츠박스 -->
    <section class="scont">

        <form action="process.php" method="post">
            <!-- 아이디박스 -->
             <div>
            <div class="minput">
                <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디(이메일)" />
                <!-- name속성은 서버쪽 사용용도로 작성함(id명과 같은 이름 많이씀) -->
            </div>
            <div class="minput">
                <!-- 비번박스 -->
                <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호" />
            </div>
            <!-- 버튼박스 -->
            <div class="btnbx">
                <input type="submit" id="sbtn" value="로그인" />
            </div>
            <!-- 기타링크 -->
            <div class="addbx">

              
                <span>
                    <a href="#">아이디찾기 |</a>
                </span>
                <span>
                    <a href="#">비밀번호찾기 |</a>
                </span>
                <span>
                    <a href="#">회원가입data</a>
                </span>
            </div>
        </form>
    </section>            


    `,
  // 회원가입 소스
  join: `  
    <!-- 2-2.타이틀 -->
    <h2 class="stit">Member</h2>
    <!-- 2-3.컨텐츠박스 -->
    <section class="scont">
        <form action="process.php" method="post">
            <ul>
                <!-- 1.아이디 -->
                <li>
                    <label class="itit" for="mid"></label>
                    <input type="text" name="mid" id="mid" maxlength="20" placeholder="아이디를 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 2.비밀번호 -->
                <li>
                    <label class="itit" for="mpw"></label>
                    <input type="password" name="mpw" id="mpw" maxlength="20" placeholder="비밀번호">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 3.비밀번호확인 -->
                <li>
                    <label class="itit" for="mpw2"></label>
                    <input type="password" name="mpw2" id="mpw2" maxlength="20" placeholder="비밀번호확인">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 4.이름 -->
                <li>
                    <label class="itit" for="mnm"></label>
                    <input type="text" name="mnm" id="mnm" maxlength="20" placeholder="이름을 입력해주세요!">
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 5.성별 -->
                <li>
                    <span class="itit">성별</span>                       
                    <label for="gen1">남성</label>
                    <input type="radio" name="gen" id="gen1">
                    <label for="gen2">여성</label>
                    <input type="radio" name="gen" id="gen2" checked>
                    <!-- 
                        라디오버튼의 name속성을
                        같은 이름으로 쓰면 그룹핑되어서
                        하나만 선택된다!
                        checked 속성은 처음 기본선택옵션임
                        -->
                </li>
                <!-- 6.이메일 -->
                <li>
                    <label class="itit" for="email1"></label>
                    <input type="text" name="email1" id="email1" placeholder="이메일앞주소">
                    <span class="gol">@</span>
                    <select name="seleml" id="seleml">
                        <option value="init">
                            선택해주세요
                        </option>
                        <option value="naver.com">
                            naver.com
                        </option>
                        <option value="daum.net">
                            daum.net
                        </option>
                        <option value="hotmail.com">
                            hotmail.com
                        </option>
                        <option value="hanmail.net">
                            hanmail.net
                        </option>
                        <option value="gmail.com">
                            gmail.com
                        </option>
                        <option value="free">
                            직접입력
                        </option>
                    </select>
                    <!-- 메시지박스 -->
                    <span class="msg"></span>
                </li>
                <!-- 7.이메일 뒷주소 직접입력창 -->
                <li>
                    <label for="email2" class="ee"></label>
                    <input type="text" name="email2" id="email2" placeholder="이메일뒷주소">
                </li>
                <!-- 8.서브밋 버튼 -->
                <li>
                    <input id="btnj" type="submit" value="가입하기">
                    <!-- submit버튼은 클릭시 form요소의
                    모든 입력내용을 action지정 페이지로
                    전송한다! -->

                    <!-- 
                        [ 참고: submit기능 ]
                        1. 일반button 요소가 form요소안에
                        위치하면 클릭시 서브밋된다!
                        2. 어떤 요소라도 JS코드로 form요소
                        의 submit() 내장함수를 호출하면
                        서브밋된다!

                        (실제예코드)

                        <button>버튼전송</button>

                        <a href="#" onclick="document.querySelector('form').submit()">a요소전송</a>
                        -->
                </li>
            </ul>
        </form>
    </section>
            
  `,
}; //// 데이터객체 /////
