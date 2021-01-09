import { useEffect, useState } from "react";
import "./App.css";
import useApiRequest from "./useApiRequest";


function App() {
  const url = `https://randomuser.me/api/?results=15`;

  const {error, isLoaded, data} = useApiRequest(url);
  console.log(data.results[0]);

  return (
    <div className="App"></div>
  );
}

export default App;
