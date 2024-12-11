/* eslint-disable react/prop-types */

const ListItem = ({ element }) => {
  return (
    <>
      {element.price < 200 ? (
        <li style={{border: "1px solid black", height:"200px"}} >
          <p>{element.title}</p>
          <p>${element.price}</p>  ✅
        </li>
      ) : (
        <li >
          {element.title} ${element.price} ❌
        </li>

      )}
    </>
  );
};
export default ListItem;
