import { useEffect, useState } from "react";
import "boxicons";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";

function App() {
  useEffect(() => {
    console.log();
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    fetch("https://tek-talka.onrender.com/api/blog-posts?pagination[page]=1")
      .then((res) => res.json())
      .then((data) => console.log("Posts: ", data));

    fetch(
      "https://tek-talka.onrender.com/api/blog-posts-categories?pagination[page]=1"
    )
      .then((res) => res.json())
      .then((data) => console.log("Categories: ", data));

    fetch("https://tek-talka.onrender.com/api/authors")
      .then((res) => res.json())
      .then((data) => console.log("Authors: ", data));
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
