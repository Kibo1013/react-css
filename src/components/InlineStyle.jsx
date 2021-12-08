import React from "react";

export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px blue",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const titleStyle = {
    margin: 0,
    color: "red"
  };

  const buttonStyle = {
    backgroundColor: "lightblue",
    margin: 0,
    color: "red",
    border: "none",
    padding: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Stule</p>
      <button style={buttonStyle}>Fight!!</button>
    </div>
  );
};
