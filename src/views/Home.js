import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">환영합니다</h1>
          <p className="lead">
            파티원정 기간동안 시험운영 하고 정보공유를 이쪽에서 해보도록도
            하겠습니다
          </p>
          <p>
            <Link to="/abyssal_s2">파티원정 정보</Link>
          </p>
        </div>
      </div>
      <div className="container">
        <h1>길드 룰</h1>
        <ul>
          <li>일요일 기준 포인트 500 미만 추방</li>
          <li>미접 사유 X 3일 / 사유 O 7일 추방</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Home;
