import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";

export const ItemCard = ({ name, desc, img, price }) => {
  return (
    <Card style={{ width: "18rem" }} className="my-3 mx-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div variant="primary" style={{fontWeight:700}}>{price}Rs</div>
      </Card.Body>
    </Card>
  );
};
