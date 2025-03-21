import React from 'react'
// import axios from 'axios';
import { useEffect} from 'react';
// import { Home } from './Home';

export const Product = (props) => {
  const {product,  addToCard = [], setAddToCard} = props

  useEffect(() => {
    if (addToCard.length !== 0) {
        localStorage.setItem("addCardData", JSON.stringify(addToCard));
    } else {
        let updated = JSON.parse(localStorage.getItem("addCardData"));
        setAddToCard(updated || []); // Initialize setAddToCard with an empty array as a fallback
    }
}, [addToCard]);

  return (
    <div className='m-4' >
      <div className="card" style={{width: "18rem"}}>
        <img
        width={"100%"} height="200px"
          src={product.image}
          className="card-img-top"
          alt="Image"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
         $ <b>{product.price}</b>
          </p>
          <button onClick={() => {
                    addToCard.push(product);
                    setAddToCard([...addToCard]);
                }}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
