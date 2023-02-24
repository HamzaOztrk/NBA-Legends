
import Container from "react-bootstrap/esm/Container";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import  { useState } from "react";

const CardContainer = () => {
    const [search, setSearch] = useState("")
    return (
    <>

    <Form.Control 
    placeholder="Search Player..."
     type="search" 
     className="w-50 m-auto"
     onChange={(e)=> setSearch(e.target.value)}
     />
      <Container className="card-container rounded-4 my-4 p-3 ">
        <Row className="gap-3 justify-content-center">
          {data.filter((player)=> player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player,index) => (
            <Col md={6} lg={4} xl={3} key={index}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
