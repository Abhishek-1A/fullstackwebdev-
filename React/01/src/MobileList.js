import React from "react";
import "./MobileList.css";
const MobileList = (props) => {

  const {image,title,price}=props;
  
  return (
    <div>
      <div className="main">
        {console.log(props)};
        <img className= 'image' src={image} />
        <div>
          <h1>{title}</h1>
          <p>{price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default MobileList;
