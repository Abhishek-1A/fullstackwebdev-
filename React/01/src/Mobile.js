import React from "react";
import MobileList from "./MobileList";

const book1 = {
  image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70',
  title: 'Realme p1',
  price: '100',
};

const book2 = {
  image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70',
  title: 'Realme p1',
  price: '100',
};
const Mobile = () => {
  return (
    <div>
      <MobileList image={book1.image} title={book1.title} price={book1.price} />
      <MobileList image={book2.image} title={book2.title} price={book2.price} />
    </div>
  );
};

export default Mobile;
