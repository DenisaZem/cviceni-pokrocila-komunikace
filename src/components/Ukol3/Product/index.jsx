import './style.css';
 
export const Product = ({ image, name, price, onAddToCart }) => {

const handleClick =()=>{
  onAddToCart(price)

}

  return (
    <div className="product" onClick={handleClick}>
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br />
        0 ks
      </div>
    </div>
  );
};
