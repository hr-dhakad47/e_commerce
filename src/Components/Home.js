import React from "react";
import { Product } from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [addToCard, setAddToCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(addToCard);
  }, [addToCard]);

  const deleteCardData = (data) => {
    console.log(data);
    let newArr = addToCard.filter((cardid) => cardid.id != data.id);
    console.log(newArr);
    setAddToCard(newArr);
  };
  
  
  return (
    <section>
      <div className="d-flex flex-wrap" >
      {products.map((product, index) => {
        return (
          <>
            <Product product={product} addToCard={addToCard} setAddToCard={setAddToCard}/>
          </>
        );
      })}
      </div>
    </section>
  );
};
