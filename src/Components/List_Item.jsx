/* eslint-disable react/prop-types */

/* const ListItem = ({ product, onDelete }) => {
  return (
    <>
      {product.price < 200 ? (
        <li style={{border: "1px solid black", height:"200px"}} >
          <p>{product.title}</p>
          <p>${product.price}</p>  ✅
          <button onClick={onDelete}>Delete</button> 
        </li>
      ) : (
        <li >
          {product.title} ${product.price} ❌
          <button onClick={onDelete}>Delete</button>
        </li>
      )}
    </>
  );
}; 
export default ListItem; */

const ListItem = ({ product, onDelete }) => {
  return (
    <li
      style={
        product.price < 200
          ? { border: "1px solid black", height: "200px" }
          : {}
      }
    >
          <p>{product.title}</p>
          <p>${product.price}</p> {product.price < 200 ? ("✅") : ("❌")}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
export default ListItem;
