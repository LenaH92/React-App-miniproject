/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./List_Item";
import { Link } from "react-router";
// import productsData from "../../products.json"

const List = ({ products, onDelete }) => {
  // const [products, setProducts] = useState(productsData)

  // const handleDelete = (id) => {
  //   const updatedList = products.filter((currentProduct) => currentProduct.id !== id); // Filter out the item with the given id
  //   setProducts(updatedList); // Update the state
  // };

  return (
    <div>
      <h1>List</h1>
      <ul id="homepageList">
        {products.map((currentProduct) => (
          <li key={currentProduct.id}>
            <Link to={`/item/${currentProduct.id}`}> 
       
            <ListItem
                // product={currentProduct}
                // onDelete={(e) => {
                //   e.preventDefault();
                //   e.stopPropagation(); // Prevent Link click
                //   handleDelete(currentProduct.id);
                // }}
                onClick={(e) => {
                  onDelete(product.id); // Call the delete handler
                }}
              />
           </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
