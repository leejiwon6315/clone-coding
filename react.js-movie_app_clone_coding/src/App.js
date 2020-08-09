import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";



function App(){
  // Link를 사용하기 위해서는 Router 태그 내부에 있어야함

  return (
    <HashRouter>
      <Navigation />  

      <Route path = "/" exact={true} component={Home} />
      <Route path = "/about" component={About} />
      <Route path = "/movie/:id" component={Detail} />
    </HashRouter>
  );

}

export default App;