import { useState } from "react";
import EditForm from "./editItemForm";

const ActionButtons = ({ product, handleDelete, setProducts }) => {
  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  const handleUpdate = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setIsEditing(false); // Close edit form
  };

  return (
    <div>
      {!isEditing ? (
        <>
          {/* Edit Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Prevent navigation
              setIsEditing(true); // Open edit form
            }}
          >
            Edit
          </button>
          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Prevent navigation
              handleDelete(product.id); // Call delete handler
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <EditForm product={product} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default ActionButtons;
