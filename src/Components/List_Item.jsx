/* eslint-disable react/prop-types */

const ListItem = ({ element, onDelete }) => {
  return (
    <>
      {element.price < 200 ? (
        <li style={{border: "1px solid black", height:"200px"}} >
          <p>{element.title}</p>
          <p>${element.price}</p>  ✅
          <button onClick={() => onDelete(element.id)}>Delete</button> 
        </li>
      ) : (
        <li >
          {element.title} ${element.price} ❌
          <button onClick={() => onDelete(element.id)}>Delete</button>
        </li>
      )}
    </>
  );
}; 
export default ListItem;
