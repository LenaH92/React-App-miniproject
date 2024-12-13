/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./List_Item";
import { Link } from "react-router";
// import productsData from "../../products.json"

const List = ({products, handleDelete}) => {
  // const [products, setProducts] = useState(productsData)

  // const handleDelete = (id) => {
  //   const updatedList = products.filter((currentProduct) => currentProduct.id !== id); // Filter out the item with the given id
  //   setProducts(updatedList); // Update the state
  // };

  return (
    <div>
      <h1>List</h1>
      <ul id="homepageList">
        {products.map((currentProduct) =>
          <Link key={currentProduct.id} to = {`/item/${currentProduct.id}`}> <ListItem product={currentProduct} onDelete={() => handleDelete(currentProduct.id)} /></Link>
        )}
      </ul>
    </div>
  );
};
export default List;
