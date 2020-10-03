import React, { Fragment } from "react";

import { MemberList } from "assets/data/Member";

const Home = () => {
  const rows = [];

  for (const [key, value] of Object.entries(MemberList)) {
    rows.push(
      <tr>
        <th scope="row">{key}</th>
        <td>{value.신분}</td>
        <td>{value.유물5}</td>
      </tr>
    );
  }
  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">참여 현황</h1>
          <p className="lead">수시로 업데이트 하겠습니다.</p>
        </div>
      </div>
      <div className="container">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">신분 현황</th>
              <th scope="col">유물 5 갯수</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Home;
