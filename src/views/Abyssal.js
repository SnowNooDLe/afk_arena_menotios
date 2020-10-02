import React, { Fragment } from "react";

import guide1 from "assets/images/guide_1.jpg";
import guide2 from "assets/images/guide_2.jpg";
import guide3 from "assets/images/abyssal_guide.png";

import "assets/style/Abyssal.css";

const Abyssal = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">파티원정</h1>
        </div>
      </div>
      <div className="container">
        <h1>기본적인 룰</h1>
        <div className="basic-rule">
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
        </div>
        <div className="recommended-start">
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
          <img src={guide1} />
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
          <img src={guide2} />
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
        </div>
        <div className="casual-info">
          <h2>
            <a href="https://www.reddit.com/r/afkarena/comments/j36xzf/visual_guide_to_pushing_abyssal_expedition_ft/">
              Visual Guide to Pushing Abyssal Expedition (ft. CASUALS)
            </a>
          </h2>
          <h4>현재 외각보스를 2개 가냐 4개 가냐 고민중에 있습니다.</h4>
          <img src={guide3} />
        </div>
      </div>
    </Fragment>
  );
};

export default Abyssal;
