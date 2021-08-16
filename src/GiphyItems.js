import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
export default function GiphyItems({ apiResponse }) {
  console.log(apiResponse);
  if (apiResponse.length === 0) return null;
  function handleOnClick(url) {
    window.open(url);
  }
  return (
    <>
      {apiResponse.data.map((element) => {
        return (
          <div
            onClick={() => handleOnClick(element.url)}
            className="each-gif"
            key={uuidv4()}
            style={{
              border: "2px solid white",
              width: "15%",
            }}
          >
            <div
              style={{
                height: "200px",
                margin: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={element.images.fixed_width.url} alt=""></img>
            </div>
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "white",
                width: "100%",
              }}
            >
              {element.title}
            </div>
          </div>
        );
      })}
    </>
  );
}
/*
{apiResponse.data.map((element) => {
          return (
            <div style={{ height: "200px", margin: "8px", display: "flex" }}>
              <img src={element.images.fixed_width.url} alt=""></img>
            </div>
          );
        })}
*/
