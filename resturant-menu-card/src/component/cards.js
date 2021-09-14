import React from "react";

export const Card = ({ item }) => {
  return (
    <div className="container" >
     
     <div className="card" style={{ maxWidth: "30%" }}>
        <h4 className="card-title" > {item.title} </h4>
        <img className="card-img-top" alt=" " src={item.img} />
        <h3> {item.category} </h3>
        <h5 className="card-price">  <span className="span">Price  {item.price} $</span></h5>
        <h4  className="card-text"> {item.desc} </h4>
    
      </div>
    </div>
  );
};
