import React from "react";

type Props = {};

export default function Underline({}: Props) {
  return (
    <div
      style={{
        width: "50px",
        backgroundColor: "#3065fe",
        height: "5px",
        borderRadius: "10px",
        margin: "12px 0",
      }}
    >
      <div
        style={{
          width: "21px",
          backgroundColor: "#fffc23",
          //#e34c67
          height: "5px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}
