import React from "react";
import "./style.css";
const Statistics = (props) => {
  let count = 1;
  return (
    <div className="reports">
      {props.name.map((val) => {
        return (
          <div key={count++} className="report">
            <p>
              Davlat:{val.region.name}, Shahar: {val.region.province}
            </p>
            <p>Kasallanganlar soni: {val.active}</p>
            <p>Tuzlaganlar soni: {val.confirmed}</p>
            <p>Vafot etganlar soni: {val.deaths}</p>
            <p>Oxirgi yangilangan muddat: {val.last_update}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
