
import { Link } from "react-router";
import ListItem from "./List_Item";

const List = ({ products, handleDelete, setProducts }) => {
  return (
    <div>
      <h1>List</h1>
      <ul id="homepageList">
        {products.map((currentProduct) => (
          <li key={currentProduct.id}>
            <Link to={`/item/${currentProduct.id}`}>
              <ListItem
                product={currentProduct}
                handleDelete={handleDelete}
                setProducts={setProducts} // Pass setProducts to ListItem
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
