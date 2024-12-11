/* eslint-disable react/prop-types */

import ListItem from "./List_Item";

const List = ({array}) => {
  return (
    <div>
      <h1>List</h1>
      <ul style={{listStyleType:"none", gap:"1em", display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {array.map((el) =>
         <ListItem key={el.id} element={el}/>
        )}
      </ul>
    </div>
  );
};
export default List;
