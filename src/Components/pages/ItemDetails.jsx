import { useParams } from "react-router";
import ActionButtons from "../ActionButtons";

const ItemDetails = ({ products, setProducts, handleDelete }) => {
  const { itemId } = useParams();
  const item = products.find((product) => product.id == itemId);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="itemDetailsDIV">
      <div className="itemGeneralInfo">
        <div className="titleAndPic">
          <h2>{item.title}</h2>
          <p>{item.brand}</p>
          <img src={item.images[0]} alt="Thumbnail" />
        </div>
        <div className="priceAndstock">
          <h6 id="discountPercentage">{item.discountPercentage}% off</h6>
          <h2>{item.price}€</h2>
          <p>Stock: {item.stock}</p>
          <p id="categoryLabel">Category: {item.category}</p>
        </div>
      </div>
      <div className="itemDetails">
        <h4>Description</h4>
        <p>{item.description}</p>
      </div>

      <ActionButtons
        product={item}
        handleDelete={handleDelete}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ItemDetails;
