import Button from "../Button";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function ProductDetail({
  ProductName,
  ProductPrice,
  Img1,
  Img2,
  Img3,
  Img4,
  Color,
  Size,
  ProductDescription,
}) {
  return (
    <section className="MainProductSection">
      <h4 className="ProductNamePath">
        <span>Back / </span>
        {ProductName}
      </h4>
      <div className="ProductContent flex">
        <div className="ProductImages flex">
          <div className="MainImage flex">
            <img src={Img1} alt=''/>
          </div>
          <div className="SubImages flex">
            <img src={Img2} alt=''/>
            <img src={Img3} alt=''/>
            <img src={Img4} alt=''/>
          </div>
        </div>
        <div className="ProductDetails flex">
          <div className="ProductNamePrice flex">
            <h2>{ProductName}</h2>
            <h2>{`$${ProductPrice}`}</h2>
          </div>
          <div className="CountColorSize flex">
            <div className="Count flex">
              <button> - </button>
              <input defaultValue="1" />
              <button> + </button>
            </div>
            <div className="Color flex">
              <p>
                Color : <span> {Color ? `${Color}` : "Silver"} </span>
              </p>
              <div className="Colors flex">
                <div className="Pink"></div>
                <div className="Gray"></div>
                <div className="DarkGreen"></div>
              </div>
            </div>
            <div className="Size">
              <p>
                Size : <span> {Size ? `${Size}` : "256GB"} </span>
              </p>
              <div className="ProductButtons flex">
                <div className="Sizes flex">
                  <Button Storge>64GB</Button>
                  <Button StorgeActive>256GB</Button>
                  <Button Storge>512GB</Button>
                </div>
                <div className="Buttons flex">
                  <Button favInProduct>
                    <FontAwesomeIcon icon={faBookmark} size="lg"/>
                  </Button>
                  <Button inProduct>Add To Cart</Button>
                </div>
              </div>
            </div>
          </div>
          <div className='ProductDescription'>
              <p>{ProductDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
