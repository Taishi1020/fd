import React from "react";

const ColorfulMessage = (props) => {
  const { color } = props; //分割代入
  const contentStyle = {
    color, //color：とcolorプロパティが同じ名前なら省略可能
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
