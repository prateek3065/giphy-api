import React, { useRef } from "react";
import RedditItems from "./RedditItems.js";
export default function BodyReddit({ setSearchFor, apiResponse, searchFor }) {
  const ref = useRef();
  //console.log(apiResponse);
  //console.log(searchFor);
  function onSubmit() {
    if (ref.current.value === "") return;
    setSearchFor(ref.current.value);
  }
  return (
    <div
      style={{
        backgroundColor: "#cfcfcf",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginTop: "4px",
      }}
    >
      <div>
        <input
          style={{ height: "40px", marginRight: "10px", borderRadius: "10px" }}
          type="text"
          placeholder="search for giphy..."
          ref={ref}
        ></input>
        <button
          style={{ height: "40px", marginRight: "10px", borderRadius: "10px" }}
          onClick={onSubmit}
        >
          enter
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "black",
          justifyContent: "space-between",
        }}
      >
        <RedditItems apiResponse={apiResponse} />
      </div>
    </div>
  );
}
