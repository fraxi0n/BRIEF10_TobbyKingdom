import { useCartContext } from "../../context/CartContext";
import { ImgComp } from '../../ui/imgComp/ImgComp';
import './panier.css';


export const Panier = () => {
  const { cartItems, increaseCartQuantity, decreaseCartQuantity } = useCartContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  
  if (cartItems.length === 0) {
    return <div className="empty-cart-container">Le panier est vide...</div>;
  }


  return (
    <div className="panier-page">
      <h1>Mon panier</h1>
      <div className="panier-items-container">
        {cartItems.map(item => (
          <div key={item.id} className="panier-item">
            <ImgComp path={item.picturePath} size={200} />
            
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{(item.price * item.quantity).toFixed(2)} €</span>
            </div>

            <div className="item-controls">
              <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button onClick={() => increaseCartQuantity(item.id)}>+</button>
            </div>

          </div>
        ))}
      </div>

      <div className="panier-summary">
        <h2>Total : {totalPrice.toFixed(2)} €</h2>
        <button className="checkout-button">Passer la commande</button>
      </div>
    </div>
  );
};
