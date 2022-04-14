import { Card } from "react-bootstrap";

const Item = ({ name, desc, img, price }) => {
  return (
    <div>
      <img src={img}></img>
      <p>Name: {name}</p>
      <p>Price: {price} RS</p>
      <p>Description: {desc} RS</p>
    </div>
  );
};

export default Item;
