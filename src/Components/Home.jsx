import { Form, FormControl, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [searchPosition, setSearchPosition] = useState("");

  const hendlerSearch = (e) => {
    setSearchPosition(e.target.value);
  };

  // const search = useLocation().search;

  // const queryParams = new URLSearchParams(search).get("queryParams");

  // console.log(queryParams);
  const getInfo = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Form className="d-flex">
        <FormControl
          onChange={hendlerSearch}
          type="search"
          defaultValue={searchPosition}
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  );
};

export default Home;
