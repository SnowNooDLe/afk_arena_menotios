import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "assets/style/RankTable.css";

const RankTable = ({ rank, data }) => {
  const rows = [];

  const [level1, setLevel1] = useState(true);

  const downArrow = <FontAwesomeIcon icon={faCaretDown} size="2x" />;
  const upArrow = <FontAwesomeIcon icon={faCaretUp} size="2x" />;

  const arrowSets = {
    true: downArrow,
    false: upArrow,
  };

  for (const [key, value] of Object.entries(data)) {
    rows.push(
      <tr key={key}>
        <th scope="row">{key}</th>
        <td>{value.신분}</td>
        <td>{value.유물5}</td>
        <td>{value.천왕퀘}</td>
      </tr>
    );
  }
  return (
    <div className="container">
      <Accordion>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            onClick={() => setLevel1(!level1)}
          >
            <div className="advanced-toggle-header title-display">
              <span>{rank}</span>
              {arrowSets[level1]}
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Username</th>
                      <th scope="col">신분 현황</th>
                      <th scope="col">유물 5 갯수</th>
                      <th scope="col">천왕 퀘스트 남은 갯수</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default RankTable;
