import GiphyItems from "./GiphyItems";
import { useRef } from "react";

const API_Key = "uUC5IzSPpIZ21XOrvLjAoS689uAfPI55";
export default function Body({ setSearchFor, apiResponse, searchFor }) {
  const ref = useRef();
  if (apiResponse.after !== undefined) return <></>;
  function onSubmit() {
    if (ref.current.value === "") return;
    setSearchFor(ref.current.value);

    ref.current.value = "";
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
        <GiphyItems apiResponse={apiResponse} />
      </div>
    </div>
  );
}
