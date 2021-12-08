import React from "react";

export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled Jsx</p>
        <button className="button">Fight!!!!</button>
      </div>
      <style jsx="true">
        {`
          .container {
            border: solid 2px blue;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .title {
            margin: 0;
            color: #3d84a8;
          }
          .button {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
