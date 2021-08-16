import Header from "./Header.js";
import BodyGiphy from "./BodyGiphy.js";
import BodyReddit from "./BodyReddit";
import { useState, useEffect } from "react";
const API_Key = "uUC5IzSPpIZ21XOrvLjAoS689uAfPI55";
function App() {
  const [searchFor, setSearchFor] = useState(() => {
    return "trending";
  });
  const [siteName, setSiteName] = useState(() => {
    return "giphy";
  });
  const [apiAdress, setApiAdress] = useState(() => {
    return `https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&limit=40&q=${searchFor}`;
  });
  const [apiResponse, setApiResponse] = useState(() => {
    return [];
  });
  function selectBody() {
    if (siteName === "giphy")
      return (
        <BodyGiphy
          setSearchFor={setSearchFor}
          apiResponse={apiResponse}
          searchFor={searchFor}
        />
      );
    else
      return (
        <BodyReddit
          setSearchFor={setSearchFor}
          apiResponse={apiResponse}
          searchFor={searchFor}
        />
      );
  }
  useEffect(() => {
    fetch(apiAdress) //`https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&limit=40&q=${searchFor}`
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        if (siteName === "giphy")
          setApiAdress(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&limit=40&q=${searchFor}`
          );
        else
          setApiAdress(
            `https://www.reddit.com/r/${searchFor}/new.json?sort=new`
          );
        setApiResponse(() => {
          const newData = res.data;
          return newData;
        });
      })
      .catch((error) => {
        console.log(`ERROR : ${error}`);
      });
  }, [searchFor, apiAdress, siteName]); //[searchFor, siteDetails]

  return (
    <>
      <Header siteName={siteName} setSiteName={setSiteName} />

      {selectBody()}
    </>
  );
}

export default App;
