import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "#ececec",
        padding: "20px",
      }}
    >
      <div>
        <h1>GiphyApi</h1>
      </div>
      <div>
        <p>Redit </p>
      </div>
    </div>
  );
}
