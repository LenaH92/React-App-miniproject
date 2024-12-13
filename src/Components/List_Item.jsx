/* eslint-disable react/prop-types */

const ListItem = ({ product, onDelete }) => {
  return (
    <li >
      <div className="listedItem">

        <img src={product.images[0]} alt="product image" className="itemIMG" />

        <div>
          <div id="cardTitle">
            <div>
              <h3>{product.title} - {product.price}€</h3>
            </div>
            <div id="discountDiv">
              <h4>{product.discountPercentage}% off</h4>
            </div>
          </div>
          <p className="productDescription">{product.description}</p>
          <div>
            <div>{product.category}</div>
            <div>
              <h4>{product.rating}/5</h4>
            </div>
          </div>
        </div>
      </div>



      {/* 
      <p>{product.title}</p>
      <p>${product.price}</p> {product.price < 200 ? "✅" : "❌"}
      <button onClick={onDelete}>Delete</button>*/}
    </li>
  );
};
export default ListItem;
