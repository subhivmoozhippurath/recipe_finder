import React from "react";

const Options = ({ data, onClick }) => {
  return (
    <div className="choices" onClick={onClick}>
      <img src={data.img} className=""></img>
      <p>{data.type}</p>
    </div>
  );
};

export default Options;
