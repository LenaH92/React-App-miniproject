import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddNewItem({ products, setProducts }) {
  //const [products, setProducts] = useState(products)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuidv4(),
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    };

    addItem(newItem);

    setTitle("");
    setDescription("");
    setPrice(0);
    setDiscountPercentage(0);
    setRating(0);
    setStock(0);
    setBrand("");
    setCategory("");
    setThumbnail("");
    setImages("");
  }

  function addItem(itemObj) {
    setProducts([itemObj, ...products]);
  }

  return (
    <div className="h2Div">
      <h2>Add a new Item to our store!</h2>
      <div /* className="formDiv" */>
        <form onSubmit={handleSubmit} className="formDiv">
          <label>
            Item title:
            <input
              required
              type="text"
              value={title}
              placeholder="Write here the product title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>

          <label>
            Item description:
            <input
              required
              type="text"
              value={description}
              placeholder="Write here the product description"
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>

          <label>
            Item price:
            <input
              required
              type="number"
              value={price}
              placeholder="Write here the product price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>

          <label>
            Item discount percentage:
            <input
              required
              type="number"
              value={discountPercentage}
              placeholder="Write here the product discount Percentage"
              onChange={(event) => setDiscountPercentage(event.target.value)}
            />
          </label>

          <label>
            Item rating:
            <input
              required
              type="number"
              value={rating}
              placeholder="Write here the product rating"
              onChange={(event) => setRating(event.target.value)}
            />
          </label>

          <label>
            Item stock:
            <input
              required
              type="number"
              value={stock}
              placeholder="Write here the product stock"
              onChange={(event) => setStock(event.target.value)}
            />
          </label>

          <label>
            Item brand:
            <input
              required
              type="text"
              value={brand}
              placeholder="Write here the product brand"
              onChange={(event) => setBrand(event.target.value)}
            />
          </label>

          <label>
            Item category:
            <input
              required
              type="text"
              value={category}
              placeholder="Write here the product category"
              onChange={(event) => setCategory(event.target.value)}
            />
          </label>

          <label>
            Item thumbnail:
            <input
              required
              type="text"
              value={thumbnail}
              placeholder="Write here the product thumbnail"
              onChange={(event) => setThumbnail(event.target.value)}
            />
          </label>

          <label>
            Item images:
            <input
              required
              type="text"
              value={images}
              placeholder="Write here the product images"
              onChange={(event) => setImages(event.target.value)}
            />
          </label>

          <button type="submit" className="buttonStyling">
            Add New Item!
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewItem;
