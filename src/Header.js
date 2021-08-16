import React from "react";
import "./App.css";
//const API_Key = "uUC5IzSPpIZ21XOrvLjAoS689uAfPI55";

export default function Header({ siteName, setSiteName }) {
  function handleSiteChange() {
    setSiteName((prev) => {
      if (prev === "giphy") return "reddit";
      return "giphy";
    });
  }
  function getLinkName() {
    if (siteName === "giphy") return <p>reddit</p>;
    return <p>giphy</p>;
  }
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
        <h1>{siteName} Api</h1>
      </div>
      <div className="link-to-another-site" onClick={() => handleSiteChange()}>
        {getLinkName()}
      </div>
    </div>
  );
}
