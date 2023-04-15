import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPageComponent from "./upload";
import ProductPageComponent from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPageComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
