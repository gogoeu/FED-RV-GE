// 공통요소 데이터 객체 - common_data.js

const comData = {
    // 1. 상단영역 코드
    topArea:`    
    
    <!-- 1. 상단영역 -->    
    <div id="top-area">
      <header class="top-area inbox">
        <!-- 파티션박스 -->
        <div class="cont-box">
          <!-- 1-1.로고영역 -->
          <div class="col-4">
            <!-- 로고박스 -->
            <h1 class="logo">
              <a href="#">
                <img src="./images/tvnlogo2.png" alt="tvN로고" />
              </a>
            </h1>
          </div>
          <!-- 1-2.메뉴영역 -->
          <div class="col-8">
            <!-- 메뉴박스 -->
            <div class="menu-box">
              <aside>
                <!-- 탑메뉴 -->
                <nav class="top-menu">
                  <ul class="fx-box">
                    <li>
                      <a href="#">로그인</a>
                    </li>
                    <li>
                      <a href="#">회원가입</a>
                    </li>
                    <li>
                      <a href="#">검색</a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <aside>
                <!-- GNB 메뉴 -->
                <nav class="gnb"></nav>
              </aside>
            </div>
          </div>
        </div>
      </header>
    </div>
    `,
    // 2. 하단영역 코드
    footerArea:`    
    <!-- 8.하단영역 -->
    <div id="footer-area">
      <footer class="footer-area inbox">
        <div class="cont-box">
          <!-- 하단링크박스 영역 -->
          <div class="col-8">
            <aside class="info-link">
              <ul>
                <li>
                  <a href="#">회사소개</a>
                </li>
                <li>
                  <a href="#">광고/제휴문의</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">개인정보 처리방침</a>
                </li>
                <li>
                  <a href="#">청소년보호정책</a>
                </li>
                <li>
                  <a href="#">법적고지</a>
                </li>
                <li>
                  <a href="#">이메일무단수집거부</a>
                </li>
                <li>
                  <a href="#">큐톤표</a>
                </li>
                <li>
                  <a href="#">고객센터</a>
                </li>
                <li>
                  <a href="#">공지사항</a>
                </li>
              </ul>
            </aside>
          </div>
          <!-- 바로가기 콤보박스 영역 -->
          <div class="combo-area col-4">
            <select name="brand" id="brand">
              <option value="init">브랜드 바로가기</option>
              <option value="brand1">MNET</option>

              <option value="brand2">MWAVE</option>

              <option value="brand3">tvN</option>

              <option value="brand4">tvN SPORTS</option>

              <option value="brand5">tvN STORY</option>

              <option value="brand6">tvN DRAMA</option>

              <option value="brand7">tvN SHOW</option>

              <option value="brand8">OCN</option>

              <option value="brand9">중화TV</option>

              <option value="brand10">UXN</option>

              <option value="brand11">CATCHON</option>

              <option value="brand12">Tooniverse</option>
            </select>
            <select name="corp" id="corp">
              <option value="init">계열사 바로가기</option>
              <optgroup label="CJ 그룹">
                <option value="corp1-1">CJ주식회사</option>
              </optgroup>

              <optgroup label="엔터테인먼트 &amp; 미디어">
                <option value="corp2-1">CJ ENM 엔터테인먼트부문</option>

                <option value="corp2-2">TVING</option>

                <option value="corp2-3">CJ CGV</option>
              </optgroup>

              <optgroup label="식품 &amp; 식품 서비스">
                <option value="corp3-1">CJ제일제당</option>

                <option value="corp3-2">CJ푸드빌</option>

                <option value="corp3-3">CJ프레시웨이</option>
              </optgroup>

              <optgroup label="생명공학">
                <option value="corp4-1">CJ제일제당 BIO사업부문</option>

                <option value="corp4-2">CJ Feed &amp; Care</option>
              </optgroup>

              <optgroup label="물류 &amp; 신유통">
                <option value="corp5-1">CJ대한통운</option>

                <option value="corp5-2">CJ대한통운 건설부문</option>

                <option value="corp5-3">CJ올리브영</option>

                <option value="corp5-4">CJ올리브네트웍스</option>

                <option value="corp5-5">CJ ENM 커머스부문</option>

                <option value="corp5-6">CJ텔레닉스</option>
              </optgroup>
            </select>
          </div>
          <!-- 하단로고박스 영역 -->
          <div class="col-12">
            <!-- 하단로고 -->
            <h2 class="footer__logo">
              <img src="./images/tvnlogo_bottom.png" alt="하단로고" />
            </h2>
          </div>
          <!-- 회사주소박스 영역 -->
          <div class="col-9">
            <address class="corp-info">
              시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780 <br />
              (주)씨제이이엔엠?대표이사 : 구창근, 윤상현 사업자정보확인 <br />
              본점 : (06761) 서울시 서초구 과천대로 870-13 사업장 : (03926)
              서울시 마포구 상암산로 66 사업자 등록번호 : 106-81-51510 개인정보
              보호책임자 : 강봉관
            </address>
          </div>
          <!-- SNS박스 영역 -->
          <div class="col-3">
            <aside class="sns-box">
              <ul>
                <li>
                  <a href="#" class="fa-brands fa-instagram">
                    <span class="ir"> 인스타그램 </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa-brands fa-facebook">
                    <span class="ir"> 페이스북 </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa-brands fa-twitter">
                    <span class="ir"> 트위터 </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa-brands fa-youtube">
                    <span class="ir"> 유튜브 </span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa-solid fa-play">
                    <span class="ir"> 네이버 TV </span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </footer>
    </div>
    `,
    
}; /////////// comData 객체 ////////////////

export default comData;