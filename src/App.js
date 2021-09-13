import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./Components/MainNavbar";
import { Container } from "react-bootstrap";
import Home from "./Components/Home";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <MainNavbar />
      <Home />
    </Container>
  );
}

export default App;
