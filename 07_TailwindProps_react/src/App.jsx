import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  // const username = [];

  return (
    <>
      <h1 className=" bg-red-600 p-8 text-black rounded-2xl mb-3 ">
        Welcome to TailwindProps in React
      </h1>
      <Card username = "ChaiAurCode" />
      <Card username="Marry" btnTxt="Click here"/>
      <Card username="Alam" btnTxt="Submit" />
    </>
  );
}

export default App;
