import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Loadable from "react-loadable";
import {Spinner} from "reactstrap"
const loading = () => (
  <div className="animated fadeIn pt-3 text-center "><Spinner  color="danger"  /></div>
);

// Pages
const Index = Loadable({
  loader: () => import("./views/Index"),
  loading
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/"
              name="Index"
              render={props => <Index {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
