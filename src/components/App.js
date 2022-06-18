import React, { useState } from "react";

import StatisticListContainer from "../redux/containers/StatisticListContainer";
import UserListContainer from "../redux/containers/UserListContainer";

const App = () => {
  const [word, setWord] = useState("");
  const getMyWord = (word) => {
    setWord(word);
  };
  return (
    <div className={`${word}`}>
      <UserListContainer getState={getMyWord} />
      <StatisticListContainer />
    </div>
  );
};

export default App;
