import React, { Fragment } from "react";

import RankTable from "components/RankTable";
import { MemberList } from "assets/data/Member";

import "assets/style/Tracker.css";

const Home = () => {
  // 견습기사
  const level1 = {};
  // 기사
  const level2 = {};
  // 남작
  const level3 = {};
  // 자작
  const level4 = {};
  // 백작
  const level5 = {};
  // 후작
  const level6 = {};
  // 공작
  const level7 = {};
  // 친왕
  const level8 = {};

  Object.entries(MemberList).forEach((member) => {
    const [key, value] = member;
    if (value.신분 === "견습기사") {
      level1[key] = value;
    } else if (value.신분 === "기사") {
      level2[key] = value;
    } else if (value.신분 === "남작") {
      level3[key] = value;
    } else if (value.신분 === "자작") {
      level4[key] = value;
    } else if (value.신분 === "백작") {
      level5[key] = value;
    } else if (value.신분 === "후작") {
      level6[key] = value;
    } else if (value.신분 === "공작") {
      level7[key] = value;
    } else if (value.신분 === "친왕") {
      level8[key] = value;
    }
  });

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">참여 현황</h1>
          <p>다음 시즌부터 제개</p>
          {/* <p className="lead">매일 한국시간 오후 5시 전후로 업데이트 예정</p> */}
        </div>
      </div>
      <div className="container">
        <h1>신분 현황 (총 68명)</h1>
        <div className="table-div">
          <h2>견습기사 인원: {Object.keys(level1).length}</h2>
          <RankTable rank="견습기사" data={level1} />
        </div>
        <div className="table-div">
          <h2>기사 인원: {Object.keys(level2).length}</h2>
          <RankTable rank="기사" data={level2} />
        </div>
        <div className="table-div">
          <h2>남작 인원: {Object.keys(level3).length}</h2>
          <RankTable rank="남작" data={level3} />
        </div>
        <div className="table-div">
          <h2>자작 인원: {Object.keys(level4).length}</h2>
          <RankTable rank="자작" data={level4} />
        </div>
        <div className="table-div">
          <h2>백작 인원: {Object.keys(level5).length}</h2>
          <RankTable rank="백작" data={level5} />
        </div>
        <div className="table-div">
          <h2>후작 인원: {Object.keys(level6).length}</h2>
          <RankTable rank="후작" data={level6} />
        </div>
        <div className="table-div">
          <h2>공작 인원: {Object.keys(level7).length}</h2>
          <RankTable rank="공작" data={level7} />
        </div>
        <div className="table-div">
          <h2>친왕 인원: {Object.keys(level8).length}</h2>
          <RankTable rank="친왕" data={level8} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
