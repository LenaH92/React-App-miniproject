import { useState } from "react"

const EditForm = ({ product, onSubmit }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [discountPercentage, setDiscountPercentage] = useState(product.discountPercentage);
  const [rating, setRating] = useState(product.rating);
  const [stock, setStock] = useState(product.stock);
  const [brand, setBrand] = useState(product.brand);
  const [category, setCategory] = useState(product.category);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);
  const [images, setImages] = useState(product.images.join(", ")); // Convert array to string

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images: images.split(",").map((img) => img.trim()) // Convert string back to array
    };
    onSubmit(updatedProduct); // Call the parent function
  };

  return (
    <form onSubmit={handleSubmit} className="formDiv">
      <h2>Edit Product</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Discount Percentage:
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
      <label>
        Stock:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Thumbnail URL:
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />
      </label>
      <label>
        Images (comma-separated):
        <input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditForm;
