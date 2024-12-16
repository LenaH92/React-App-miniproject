/* eslint-disable react/prop-types */

const ListItem = ({ product, onDelete }) => {
  return (
    <li>
      <div className="listedItem">
        <img src={product.thumbnail} alt="product image" className="itemIMG" />

        <div id="itemInfoDiv">
          <div id="cardTitle">
            <div>
              <h3>
                {product.title} - {product.price}€
              </h3>
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
              <div><button
                onClick={(e) => {
                  onDelete(e); // Call the delete handler
                }}
              >
                Delete Item
              </button>
                <button type="button">
                  Edit Item
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ListItem;
