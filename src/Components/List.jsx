/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./List_Item";
import productsData from "../../products.json"

const List = () => {
  const [products, setProducts] = useState(productsData)

  const handleDelete = (id) => {
    const updatedList = products.filter((currentProduct) => currentProduct.id !== id); // Filter out the item with the given id
    setProducts(updatedList); // Update the state
  };

  return (
    <div>
      <h1>List</h1>
      <ul id="homepageList">
        {products.map((currentProduct) =>
          <ListItem key={currentProduct.id} product={currentProduct} onDelete={() => handleDelete(currentProduct.id)} />
        )}
      </ul>
    </div>
  );
};
export default List;
