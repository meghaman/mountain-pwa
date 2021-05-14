import React from "react";
import { useRouteMatch } from "react-router";

import founders from "Content/founders.json";
import { IMatchedIDFromRoute } from "../../Interfaces/interfaces";
import AnswerTextBox from "../AtomicComponents/AnswerTextBox";

const FounderPage: React.FC = () => {
  const match: IMatchedIDFromRoute = useRouteMatch();
  const id = parseInt(match.params["id"]) || 0;

  const currentFounder = founders[id];

  return (
    <>
      {currentFounder.caches.map((cache, i: number) => {
        return (
          <AnswerTextBox
            cacheNumber={i}
            correctAnswer={cache.secret}
          ></AnswerTextBox>
        );
      })}
    </>
  );
};

export default FounderPage;
