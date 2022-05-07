import "./style.css";

function Button({ inHeader, AddToCart, fav, Storge,StorgeActive,inProduct,favInProduct,inPayment, ...props }) {
  return (
    // (inHeader && "inHeader") || (inProduct && "inProduct")

    <button
      className={
        (inHeader && "inHeader") ||
        (inProduct && "inProduct") ||
        (AddToCart && "AddToCart") ||
        (fav && "fav") ||
        (favInProduct && "favInProduct") ||
        (Storge && "Storge") ||
        (inPayment && "inPayment") ||
        (StorgeActive && "StorgeActive")
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
