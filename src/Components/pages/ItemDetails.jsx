import { useParams } from "react-router";


function ItemDetails({ products }) {
    const { itemId } = useParams();
    const item = products.find((productEach) => {

        return itemId == productEach.id
    })

    return (
        <> {item && <div className="itemDetailsDIV">
            <div className="itemGeneralInfo">
                <div className="titleAndPic">
                    <div className="itemTitle">
                        <h2>{item.title}</h2>
                        <p>{item.brand}</p>
                    </div>
                    <div className="itemThumbnail">
                        <img src={item.images[0]} alt="" />
                    </div>
                </div>
                <div className="priceAndstock">
                    <h6 id="discountPercentage">{item.discount}% off</h6>
                    <h2>{item.price}</h2>
                    <p>{item.stock}</p>
                    <p id="categoryLabel">{item.category} </p>
                </div>
            </div>
            <div className="itemDetails">
                <div className="detailsDescription">
                    <h4>Description</h4>
                    <p>{item.description}</p>
                </div>
                <div className="itemImgsDIV">
                    map through the imgs item.images has and display them all.

                </div>
            </div>
        </div>}
        </>
    );
}

export default ItemDetails;