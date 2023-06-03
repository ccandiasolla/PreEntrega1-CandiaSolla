import './CartItem.css'
import React from 'react';
import imagePath1 from '../../images/img1.jpg';
import imagePath2 from '../../images/img2.jpg';
import imagePath3 from '../../images/img3.jpg';
import imagePath4 from '../../images/img4.jpg';
import imagePath5 from '../../images/img5.jpg';
import imagePath6 from '../../images/img6.jpg';

const imagePaths = {
  '1': imagePath1,
  '2': imagePath2,
  '3': imagePath3,
  '4': imagePath4,
  '5': imagePath5,
  '6': imagePath6,
};

const CartItem = ({ id, name, img, price, quantity }) => {
const imagePath = imagePaths[id];

  return (
    <div>
      <h3>{name}</h3>
      <picture>
        <img src={imagePath} alt={name} className="ItemImg" />
      </picture>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
    </div>
  );
};

export default CartItem;
