import React, { useRef, useState, useEffect } from "react";
import GiphyItems from "./GiphyItems";
const API_Key = "uUC5IzSPpIZ21XOrvLjAoS689uAfPI55";
export default function Body() {
  const ref = useRef();
  const [searchFor, setSearchFor] = useState(() => {
    return "trending";
  });
  const [apiResponse, setApiResponse] = useState(() => {
    return [];
  });
  function onSubmit() {
    if (ref.current.value === "") return;
    setSearchFor(ref.current.value);
    ref.current.value = "";
  }
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&limit=40&q=${searchFor}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(searchFor);
        setApiResponse(res);
      })
      .catch((error) => {
        console.log(`ERROR : ${error}`);
      });
  }, [searchFor]);

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
        }}
      >
        <GiphyItems apiResponse={apiResponse} />
      </div>
    </div>
  );
}
