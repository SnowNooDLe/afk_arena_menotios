import React, { Fragment, useRef } from "react";

import tile from "assets/images/tile.jpg";
import rule1 from "assets/images/rule.jpg";
import mapImage from "assets/images/s5/season_4_5_map.jpg";
import start1 from "assets/images/s5/start1.jpeg";
import start2 from "assets/images/s5/start2.png";
import start3 from "assets/images/s5/start3.jpeg";
import visualGuide from "assets/images/s5/visual_guide.jpg";

import "assets/style/Abyssal.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const AbyssalS5 = () => {
  // Basic MAP
  const operation = useRef(null);
  const scrollToOperation = () => scrollToRef(operation);

  const guide = useRef(null);
  const scrollToGuide = () => scrollToRef(guide);
  // Basic MAP
  const startUnit = useRef(null);
  const scrollToUnit = () => scrollToRef(startUnit);
  // Basic Rule
  const rule = useRef(null);
  const scrollToRule = () => scrollToRef(rule);

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
                onClick={scrollToOperation}
              >
                현재 목표
              </button>
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
                onClick={scrollToGuide}
              >
                비쥬얼 가이드
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={scrollToUnit}
              >
                스타팅 유닛
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
        <div className="current-operation" ref={operation}>
          <h1>현재 목표</h1>
          <p>
            <strong>공통 </strong>: TBA
          </p>
          <h4>출처:</h4>
          <ul>
            <li>https://www.reddit.com/r/afkarena/comments/pgqdj2/abex_map_s45_efficient_mode_by_sniffet/</li>
          </ul>
          <img src={mapImage} />
        </div>
        <button type="button" className="btn btn-success" onClick={scrollToTop}>
          페이지 맨 위로
        </button>
        <div className="basic-rule" ref={rule}>
          <h1>기본적인 룰</h1>
          <ol>
            <li>
              이런식으로 체력 회복까지 남은 시간 이 표시될경우, 10분 이하 일때만
              공격해주세요. 이 부분은 경고 + 추방 으로도 묶겠습니다.
              <img src={rule1} />
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
        <div className="visual-guide" ref={guide}>
          <h4>출처:</h4>
          <ul>
            <li>https://cafe.naver.com/afkarenakr/765607</li>
          </ul>
          <img src={visualGuide} />
          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
            페이지 맨 위로
          </button>
        </div>
        <div className="start-units" ref={startUnit}>
          <h2>스타팅 포인트</h2>
          <h4>출처</h4>
          <ul>
            <li>https://cafe.naver.com/afkarenakr/765583</li>
            <li>https://cafe.naver.com/afkarenakr/765403</li>
          </ul>
          <p>
            사진에도 있듯이 <strong>참고사항</strong> 정도로만 봐주세요, 본인의
            유닛 풀에 맞게 유동적으로 선택해주시기 바랍니다.
          </p>
          <img src={start2} />
          <img src={start1} />
          <img src={start3} />

          <button
            type="button"
            className="btn btn-success"
            onClick={scrollToTop}
          >
            페이지 맨 위로
          </button>
        </div>
        <br />
      </div>
    </Fragment>
  );
};

export default AbyssalS5;
