import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <h1>환영합니다</h1>
      <ul>
        <li>일요일 기준 포인트 500 미만 추방</li>
        <li>미접 사유 X 3일 / 사유 O 7일 추방</li>
      </ul>
    </Fragment>
  );
};

export default Home;