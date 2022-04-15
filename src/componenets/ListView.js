import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { ItemCard } from "./ItemCard";
import Button from "react-bootstrap/Button";

const ListView = ({name}) => {
  const pageSize = 20;
  const [page, setPage] = useState(1);
  const params = useParams();

  console.log("~ params", params);

  const url = `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${name}&page=${page}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`;

  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  console.log("~ totalItems", totalItems)
  console.log("~ pages", pageSize)

  const prevPage = () => {
    //  setPage(page-1);
    // fetch(
    //   `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${
    //     params.apple
    //   }&page=${page - 1}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`
    // )
    setPage((prevPage)=>prevPage-1);
      fetch(url)
      .then((list) => list.json())
      .then((res) => setItems(res.result.products));

    setTotalItems();

    setPage(page - 1);
  };
  const nextPage = () => {
    setPage((prevPage)=>prevPage+1);

    fetch(url)
      .then((list) => list.json())
      .then((res) => setItems(res.result.products));
  };

  useEffect(() => {
    fetch(url)
      .then((item) => item.json())
      .then((resp) => {
        setItems(resp.result.products);
        setTotalItems(resp.result.count);
      });
  }, []);

  console.log("items", items);


  return (
    <div className="col">
    <div className="d-flex flex-wrap m-2">
      {items.map((item) => {
        return (
          <div>
            <ItemCard
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

      <div className="d-flex justify-content-between">
        <Button variant="dark" onClick={prevPage} disabled={page <= 1}>
          &lt; &lt;Prev
        </Button>{" "}
        <Button
          variant="dark"
          onClick={nextPage}
          disabled={page>=Math.ceil(totalItems / pageSize)}
        >
          Next &gt; &gt;
        </Button>{" "}
      </div>
    </div>
  );
};

export default ListView;
