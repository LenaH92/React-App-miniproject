import { useState } from "react";
import EditForm from "./editItemForm";

const ActionButtons = ({ product, handleDelete, setProducts }) => {
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  // const {pathname} = useLocation();
  // console.log(!pathname.includes ('item'))
  const handleUpdate = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setIsEditing(false); // Close edit form
  };

  return (
    <div className="actionBTNs">
      {!isEditing ? (
        <>
          {/* Edit Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true); // Open edit form
            }}
          >
            Edit
          </button>
          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.preventDefault();

              handleDelete(product.id); // Call delete handler
            }}
          >
            Delete
          </button>
          {/* {!pathname.includes ('item') && 
          <button><Link to={`/item/${product.id}`}>see more details</Link></button>} */}
        </>
      ) : (

        <EditForm product={product} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default ActionButtons;
