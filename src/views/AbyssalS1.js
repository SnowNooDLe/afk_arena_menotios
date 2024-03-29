import React, { Fragment, useRef } from "react";

import startChar1 from "assets/images/guide_1.jpg";
import startChar2 from "assets/images/guide_2.jpg";
import casualsGuide from "assets/images/abyssal_guide.png";
import tile from "assets/images/tile.jpg";
import map from "assets/images/guide_3.jpg";
import example from "assets/images/example.jpg";

import "assets/style/Abyssal.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const AbyssalS1 = () => {
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
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">파티원정</h1>
          <p className="lead">
            언제든 공유하고 싶은 자료가 있으시면 알려주세요, 업데이트
            하겠습니다.
          </p>
          <div className="col-md-12">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={scrollToRule}
              >
                기본적인 룰
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={scrollToRoute}
              >
                공략 루트
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={scrollToChar}
              >
                캐릭터 추천
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={scrollToCASUALS}
              >
                CASUALS 추천
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="section1" className="container">
        <a
          className="btn btn-info"
          href="https://gall.dcinside.com/afk/484906#tx1"
          role="button"
        >
          파티 원정이 처음이신분에게는 도움 될만한 글
        </a>
        <div className="current-operation">
          <h1>현재 목표</h1>
          <p>
            현재 본인이 공작이면서 에센스 8천 이상이다 -> 별도 공지가 있을때까지
            고기 존버
          </p>
          <p>
            그 외 모든분들은 (현 27명) 공작까지 주말을 이용하여 최대한
            올라와주시기 바랍니다.
          </p>
          <p>
            <strong>공통 </strong>: 에센스는 최소 8천은 맞춰주세요.
          </p>
        </div>
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
            <br />
            <p>
              아래의 사진처럼{" "}
              <span style={{ color: "blue", fontWeight: "bolder" }}>공터</span>
              를 나 또는 누군가가 점령했고 그 주변으로 먹을 수 있는{" "}
              <span style={{ color: "red", fontWeight: "bolder" }}>영지</span>가
              있다면 가장 이상적인 방법은{" "}
              <span style={{ color: "blue", fontWeight: "bolder" }}>공터</span>{" "}
              소유자가 군단챗에 작업진행여부를 알려주 것입니다.
            </p>
            <p>
              혹여 그게 안 될 경우, 공지방에 @ 태그 또는 군단챗에서{" "}
              <span style={{ color: "blue", fontWeight: "bolder" }}>공터</span>{" "}
              소유자에게 먼저 여쭤보시길 바랍니다.
            </p>
            <p>
              물론 귀찮으시겠지만, 후에 땅 먹는걸로 싸움이 일어나지 않았으면
              하는 바램입니다
            </p>
            <img src={tile} />

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
            <li>
              천왕 퀘스트 관련 레벨 8 영토 (대도시)
              <ul>
                <li>
                  당장 필요한 부분은 아니지만 가까운 미래에 필요하게 되리라 믿고
                  미리 올려 놓습니다.
                </li>
                <li>
                  기존 파티원정처럼 천왕 퀘스트 완료 용 레벨 8 영토 (대도시)
                  하나를 고를 텐데요, 이 영토 같은경우는 기다리시는 분이 있고
                  없고를 떠나 무조건 퀘스트 완료 후 포기 하는 형태로 가겠습니다.
                </li>
              </ul>
            </li>
          </ol>
          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
            페이지 맨 위로
          </button>
        </div>
        <br />
        <div className="map" ref={route}>
          <h2>현재 플랜입니다.</h2>
          <h3 className="black-line">
            <strike>
              검정라인 - 시작후 본인 위치에 따라, A5 또는 A12 로 모여주시기
              바랍니다.
            </strike>
          </h3>
          <h3 className="red-line">
            <strike>
              빨간라인 - 외각 보스 처치 후 A5 이셨던 분들은 B2, A12 이셨던
              분들은 B4 로 모여주시기 바랍니다.
            </strike>
          </h3>
          <h3 className="orange-line">
            <strike>
              주황라인 - 외각 보스 처치 후 주황 라인을 따라 파밍 하세요 (공터
              3개 이상 룰 꼭 지켜 주시구요.)
            </strike>
          </h3>
          <h3 className="light-sky-line">
            <strike>
              파랑라인 - 현재 위쪽 보스 다음이 레벨 7 도시라서, 밑에서 왼쪽으로
              파밍한곳으로 해서 연결하려 합니다. B4 부터는 파밍문제 떄문에라도
              조금나가서 두갈래로 나눠지든 하겠습니다. 현재 밑에 계신분들은 먼저
              올라가시기 바랍니다.
            </strike>
          </h3>
          <h3 className="green-line">
            초록라인 - 케인 치겠습니다, 그림 화살표 끝에서 만나겠습니다.
          </h3>

          <img src={map} />

          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
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
            정해진 룰은 없습니다만, 엔진 + 서포터 + 레인저 가 여러모로
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
          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
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
          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
            페이지 맨 위로
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AbyssalS1;
