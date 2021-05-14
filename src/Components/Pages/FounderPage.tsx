import React from "react";
import { useRouteMatch } from "react-router";

import founders from "Content/founders.json";
import { IMatchedIDFromRoute } from "../../Interfaces/interfaces";

const FounderPage: React.FC = () => {
  const match: IMatchedIDFromRoute = useRouteMatch();
  const id = parseInt(match.params["id"]) || 0;

  const currentFounder = founders[id];

  return <div>{currentFounder.name}</div>;
};

export default FounderPage;
