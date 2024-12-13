import { useState } from "react"



function addNewItem() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [discountPercentage, setDiscountPercentage] = useState(0)
    const [rating, setRating] = useState(0)
    const [stock, setStock] = useState(0)
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [images, setImages] = useState("")



    function handleSubmit(event) {
        event.preventDefault()
        const newItem = {
            //id, we need to make it up with the uuiv extension
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images
        }
    }

    return (
        <div id="formDiv">

            <h2>Add a new Item to our store!</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    Item title:
                    <input required type="text" value={title} placeholder="Write here the product title" onChange={event => setTitle(event.target.value)} />
                </label>

                <label>
                    Item description:
                    <input required type="text" value={description} placeholder="Write here the product description" onChange={event => setDescription(event.target.value)} />
                </label>

                <label>
                    Item price:
                    <input required type="number" value={price} placeholder="Write here the product price" onChange={event => setPrice(event.target.value)} />
                </label>

                <label>
                    Item discountPercentage:
                    <input required type="number" value={discountPercentage} placeholder="Write here the product discountPercentage" onChange={event => setDiscountPercentage(event.target.value)} />
                </label>

                <label>
                    Item rating:
                    <input required type="number" value={rating} placeholder="Write here the product rating" onChange={event => setRating(event.target.value)} />
                </label>

                <label>
                    Item stock:
                    <input required type="number" value={stock} placeholder="Write here the product stock" onChange={event => setStock(event.target.value)} />
                </label>

                <label>
                    Item brand:
                    <input required type="text" value={brand} placeholder="Write here the product brand" onChange={event => setBrand(event.target.value)} />
                </label>

                <label>
                    Item category:
                    <input required type="text" value={category} placeholder="Write here the product category" onChange={event => setCategory(event.target.value)} />
                </label>

                <label>
                    Item thumbnail:
                    <input required type="text" value={thumbnail} placeholder="Write here the product thumbnail" onChange={event => setThumbnail(event.target.value)} />
                </label>

                <label>
                    Item images:
                    <input required type="text" value={images} placeholder="Write here the product images" onChange={event => setImages(event.target.value)} />
                </label>

                <button type="submit">Add Student</button>
            </form>

        </div>
    )
}

/* "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images":  */