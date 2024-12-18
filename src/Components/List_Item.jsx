/* eslint-disable react/prop-types */
import ActionButtons from "./ActionButtons";
import { Link } from "react-router";

const ListItem = ({ product, handleDelete, setProducts }) => {
  return (
    <div className="listedItem">
      <img src={product.thumbnail} alt="product image" className="itemIMG" />
      <div className="detailsCard">
        <div id="cardTitle">
          <h3>
            {product.title} - {product.price}€
          </h3>
          <h4>{product.discountPercentage}% off</h4>
        </div>
        <p className="productDescription">{product.description}</p>
        <div>
          <div className="categoryLabel"><span>{product.category}</span></div>
          <div>
            <h4>{product.rating}/5</h4>
            {/* Use ActionButtons */}
            {/* <ActionButtons
            
              product={product}
              handleDelete={handleDelete}
              setProducts={setProducts}
            
            /> */}
            <button className="detailsBTN"><Link to={`/item/${product.id}`}>See more</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
