import React, { useState } from "react";
import "../components/style.css";

const UserList = (props) => {
  const a = props.countries.length ? "none" : "block";
  const [word, setWord] = useState("");
  const renderHtml = () => {
    if (!props.countries.length) {
      return;
    }
    let count = 1;
    let c = 1;
    const selectFunc = (data) => {
      setWord("selected");
      props.selectAction(data);
      props.getState("app");
    };
    return props.countries.map((val) => {
      return (
        <div
          onClick={() => {
            selectFunc(val.iso);
          }}
          className="country"
          key={count++}
        >
          <h4>{c++}</h4>
          <p>{val.name}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1 className="title" style={{ display: a }}>
        Covid World Statistics of Countries
      </h1>
      <button
        className="get_started_btn"
        style={{ display: a }}
        onClick={() => {
          props.getDataAction();
        }}
      >
        Get Started
      </button>
      <div className={`countries  ${word}`}>{renderHtml()}</div>
    </div>
  );
};

export default UserList;
