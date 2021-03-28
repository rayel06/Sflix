import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
      <Header />
      <Switch>
        <Route path="https://rayel06.github.io/Sflix/" exact component={Home} />
        <Route path="https://rayel06.github.io/Sflix/tv" component={TV} />
        <Route path="https://rayel06.github.io/Sflix/search" component={Search} />
        <Route path="https://rayel06.github.io/Sflix/movie/:id" component={Detail} />
        <Route path="https://rayel06.github.io/Sflix/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
  </Router>
);