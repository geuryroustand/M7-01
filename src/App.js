import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavbar";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage";

function App() {
  return (
    <Router>
      <Container fluid>
        <MainNavbar />
        <Home />
        <Switch>
          <DetailsPage path="/search/:id" />
          {/* <Route path="/search" component={Home} exact /> */}
          {/* <Route path="/search/:id"></Route> */}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
