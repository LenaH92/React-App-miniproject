
import ActionButtons from "./ActionButtons";

const ListItem = ({ product, handleDelete, setProducts }) => {
  return (
    <div className="listedItem">
      <img src={product.thumbnail} alt="product image" className="itemIMG" />
      <div>
        <div id="cardTitle">
          <h3>
            {product.title} - {product.price}€
          </h3>
          <h4>{product.discountPercentage}% off</h4>
        </div>
        <p className="productDescription">{product.description}</p>
        <div>
          <div>{product.category}</div>
          <div>
            <h4>{product.rating}/5</h4>
            {/* Use ActionButtons */}
            <ActionButtons
              product={product}
              handleDelete={handleDelete}
              setProducts={setProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
