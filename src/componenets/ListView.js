import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ListView = () => {
    const params= useParams();
    console.log("~ params", params)

  const url =
    `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${params.apple}&page=2&count=5&sort_by=&sort_dir=desc&filter=`;



  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((item) => item.json())
      .then((resp) => setItems(resp.result.products));
  }, []);

  console.log("items", items);

  const obj = {
    id_product: "79565",
    sku: "21AUW14029-311668",
    name: "Sage Green Jacquard Kurta with Embroidery",
    price: "2999",
    selling_price: "1499",
    discount: "50",
    quantity: "0",
    visibility: "show",
    description:
      "Sage green straight jacquard kurta in round neck and three-quarter sleeves. It also feautures metallic embroidery.",
    image:
      "https://wforwoman.gumlet.io/product/21AUW14029-311668/300/21AUW14029-311668_1.JPG",
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <Item
              name={item.name}
              price={item.price}
              desc={item.description}
              img={item.image}
            />
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
