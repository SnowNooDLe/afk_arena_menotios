import React, { Fragment, useRef } from "react";

import startChar1 from "assets/images/guide_1.jpg";
import startChar2 from "assets/images/guide_2.jpg";
import casualsGuide from "assets/images/abyssal_guide.png";
import map from "assets/images/guide_3.jpg";

import "assets/style/Abyssal.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Abyssal = () => {
  // Basic Rule
  const rule = useRef(null);
  const scrollToRule = () => scrollToRef(rule);

  // Route
  const route = useRef(null);
  const scrollToRoute = () => scrollToRef(route);

  // Recommended Char
  const recChar = useRef(null);
  const scrollToChar = () => scrollToRef(recChar);

  // Recommended CASUALS guide
  const guideCASUALS = useRef(null);
  const scrollToCASUALS = () => scrollToRef(guideCASUALS);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">파티원정</h1>

          <div class="col-md-12">
            <div className="btn-group">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={scrollToRule}
              >
                기본적인 룰
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={scrollToRoute}
              >
                공략 루트
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={scrollToChar}
              >
                캐릭터 추천
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={scrollToCASUALS}
              >
                CASUALS 추천
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="section1" className="container">
        <div className="basic-rule" ref={rule}>
          <h1>기본적인 룰</h1>
          <ol>
            <li>
              공터 최소 3개 유지
              <ul>
                <li>길이 끊기는 것을 방지하기 위해 최소한 공터 3개 유지</li>
              </ul>
            </li>

            <li>
              다른 사람이 잇고 있는 공터와 인접한 영지는 확인 (공지방 또는
              인게임챗) 뒤 공격
              <ul>
                <li>
                  공지방 - @ 사용하여 태그하지 않으시면, 알람 꺼두신분이면
                  알람이 가지 않습니다.
                </li>
                <li>
                  게임챗 - 작업여부 확인하시고 답이 5분 정도 없거나 드셔도
                  된다는 답변 받으시면 공격
                </li>
                <li>
                  지난 원정 하신분들을 아시겠지만, 파티원정 전용 인게임 챗
                  그룹이 생성됩니다.
                </li>
              </ul>
            </li>

            <li>
              피 빼주기 금지
              <ul>
                <li>
                  모든 수단을 동원하여 적 진영 중 한 팀을 깰 능력이 있는
                  경우/후반부 백작~친왕 못다신 분들을 위한 도움 제외하고 피
                  빼주기 요청 금지
                </li>
              </ul>
            </li>
          </ol>
          <button type="button" class="btn btn-success" onClick={scrollToTop}>
            페이지 맨 위로
          </button>
        </div>
        <br />
        <div className="map" ref={route}>
          <h2>현재 플랜입니다.</h2>
          <h3 className="black-line">
            검정라인 - 시작후 본인 위치에 따라, A5 또는 A12 로 모여주시기
            바랍니다.
          </h3>
          <h3 className="red-line">
            빨간라인 - 외각 보스 처치 후 A5 이셨던 분들은 B2, A12 이셨던 분들은
            B4 로 모여주시기 바랍니다.
          </h3>
          <h3 className="orange-line">
            주황라인 - 외각 보스 처치 후 주황 라인을 따라 파밍 하세요 (공터 3개
            이상 룰 꼭 지켜 주시구요.)
          </h3>
          <h3 className="green-line">
            초록라인 - 마지막 보스 전은 둘중 하나만 치겠습니다
          </h3>

          <img src={map} />

          <button type="button" class="btn btn-success" onClick={scrollToTop}>
            페이지 맨 위로
          </button>
        </div>
        <br />
        <div className="recommended-start" ref={recChar}>
          <h1>
            추천 시작 캐릭터{" "}
            <a href="https://gall.dcinside.com/mgallery/board/view/?id=afk&no=483978">
              참고
            </a>
          </h1>
          <h2>
            정해진 룰은 없습니다만, 엔진 + 서포터 + 레인저 가 이로저로
            정신건강에 이로울거 같습니다.
          </h2>
          <h3>엔진 + 서포터</h3>
          <img src={startChar1} />
          <p>
            핵심:{" "}
            <span style={{ fontWeight: "bold" }}>
              로완, 쌍둥이, 탈렌, 에이츠
            </span>
          </p>
          <p>
            중요: <span style={{ fontWeight: "bold" }}>로젤린, 타시</span>
          </p>
          <h3>레인저</h3>
          <img src={startChar2} />
          <p>
            핵심:{" "}
            <span style={{ fontWeight: "bold" }}>
              에이론, 라이카, 페라엘, 아탈리아, 세실리아, 귀네스
            </span>
          </p>
          <p>
            중요:{" "}
            <span style={{ fontWeight: "bold" }}>
              타이더스, 나코루루, 켈투르, 탕구리(보스)
            </span>
          </p>
          <button type="button" class="btn btn-success" onClick={scrollToTop}>
            페이지 맨 위로
          </button>
        </div>
        <br />
        <div className="casual-info" ref={guideCASUALS}>
          <h2>
            <a href="https://www.reddit.com/r/afkarena/comments/j36xzf/visual_guide_to_pushing_abyssal_expedition_ft/">
              Visual Guide to Pushing Abyssal Expedition (ft. CASUALS)
            </a>
          </h2>

          <img src={casualsGuide} />
          <button type="button" class="btn btn-success" onClick={scrollToTop}>
            페이지 맨 위로
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Abyssal;
