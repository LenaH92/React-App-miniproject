function ItemDetails() {
    // We need to pass through the item as a prop or something so we have all the details in the page
    //I havent checked properly the keys of the objects, but I wrote them as a guide

    return (
        <div className="itemDetailsDIV">
            <div className="itemGeneralInfo">
                <div className="titleAndPic">
                    <div className="itemTitle">
                        <h2>{ItemDetails.title}</h2>
                        <p>{ItemDetails.brand}</p>
                    </div>
                    <div className="itemThumbnail">
                        <img src="{item.thumbnail}" alt="" />
                    </div>
                </div>
                <div className="priceAndstock">
                    <h6 id="discountPercentage">{ItemDetails.discount}% off</h6>
                    <h2>{item.price}</h2>
                    <p>{item.stock}</p>
                    <p id="categoryLabel">{item.category} </p>
                </div>
            </div>
            <div className="itemDetails">
                <div className="detailsDescription">
                    <h4>Description</h4>
                    <p>item.description</p>
                </div>
                <div className="itemImgsDIV">
                    map through the imgs item.images has and display them all.

                </div>
            </div>
        </div>
    );
}

export default ItemDetails;