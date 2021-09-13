import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [searchPosition, setSearchPosition] = useState("");
  const [saveData, setSaveData] = useState([]);

  // const { id } = useParams();

  // console.log(id);

  const hendlerSearch = (e) => {
    setSearchPosition(e.target.value);
  };

  // console.log(searchPosition);

  // const search = useLocation().search;

  // const queryParams = new URLSearchParams(search).get("queryParams");

  // console.log(queryParams);
  const getInfo = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?title=${searchPosition}`
      );
      if (response.ok) {
        const { data } = await response.json();
        setSaveData(data);
        // console.log(data);
      } else {
        alert("Fetching data have a problem");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(saveData);
  // useEffect(() => {
  //   getInfo();
  // }, [searchPosition]);

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={10} className="mx-auto">
          <Form className="d-flex" onSubmit={getInfo}>
            <FormControl
              onChange={hendlerSearch}
              type="search"
              defaultValue={searchPosition}
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Col>

        <Col xs={10}></Col>
      </Row>
    </Container>
  );
};

export default Home;
