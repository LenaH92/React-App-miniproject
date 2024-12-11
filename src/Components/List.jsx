/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./List_Item";

const List = ({array}) => {
    const [list, setList] = useState(array);
    const handleDelete = (id) => {
        const updatedList = list.filter((item) => item.id !== id); // Filter out the item with the given id
        setList(updatedList); // Update the state
      };
    return (
    <div>
      <h1>List</h1>
      <ul style={{listStyleType:"none", gap:"1em", display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
        {array.map((el) =>
         <ListItem key={el.id} element={el} onDelete={handleDelete}/>
        )}
      </ul>
    </div>
  );
};
export default List;
