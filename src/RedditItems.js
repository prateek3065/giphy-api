import React from "react";
import { v4 as uuidv4 } from "uuid";
export default function RedditItems({ apiResponse }) {
  if (apiResponse === undefined || apiResponse.after === undefined)
    return <></>;
  //console.log(apiResponse);
  function handleOnClick(endUrl) {
    window.open(`https://www.reddit.com/${endUrl}`);
  }
  const items = apiResponse.children;
  console.log(items);
  return (
    <>
      {items.map((element) => {
        return (
          <div
            onClick={() => handleOnClick(element.data.permalink)}
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
              <img src={element.data.thumbnail} alt=""></img>
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
