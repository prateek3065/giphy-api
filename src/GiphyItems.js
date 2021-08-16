import React from "react";
import { v4 as uuidv4 } from "uuid";
export default function GiphyItems({ apiResponse }) {
  if (apiResponse.length === 0) return null;

  return (
    <>
      {apiResponse.data.map((element) => {
        return (
          <div
            key={uuidv4()}
            style={{ height: "200px", margin: "8px", display: "flex" }}
          >
            <img src={element.images.fixed_width.url} alt=""></img>
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
