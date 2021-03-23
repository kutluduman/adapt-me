import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchParams from "./components/SearchParams.jsx";
import Details from "./components/Details.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
