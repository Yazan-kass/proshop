import Button from "../Button";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function Product({ title, ImgUrl, Price ,rate ,OldPrice,NewPrice}) {
  return (
    <div className="Product flex">
      <div className="ProductImg flex">
        <img src={ImgUrl} alt="" />
      </div>
      <h5>{title}</h5>
      <div className="rating flex">
        {rate}
      </div>
      <h3 className={NewPrice && "NewPrice"}>{OldPrice} <span>{`$${Price}`}</span></h3>
      <div className="Buttons flex">
        <Button fav>
          <FontAwesomeIcon icon={faBookmark} />
        </Button >
        <Button AddToCart>Add To Cart</Button>
      </div>
    </div>
  );
}

export default Product;
