import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import GetData from "./functions/GetData";

function App()
{
  // Hooks
  const [data, setData] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() =>
  {
    GetData(setData, setIsLoaded);
  }, []);

  return (
    <React.Fragment>
      <div>
        {isLoaded ? "Data from server: " + data : "Loading..."}
      </div>
    </React.Fragment>);
}

export default App;
