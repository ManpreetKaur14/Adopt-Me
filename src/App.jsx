import React from "react";
import Pet from "./Pet";
import ReactDOM from "react-dom";



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Bingo",
      animal: "Cat",
      breed: "Indie",
    }),
    React.createElement(Pet, {
      name: "Jerry",
      animal: "Cat",
      breed: "Indie",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
