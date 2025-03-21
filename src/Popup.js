import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useParams } from 'react-router-dom';

function Popup() {

    const { productId } = useParams();

  const [msg, setMsg] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  // const [rating, setRating] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://e-commerce-node-black.vercel.app/productsList/${productId}`);
          setMsg(response.data);
          setId(response.data.id || "");  
          setTitle(response.data.title || ""); 
          setPrice(response.data.price || ""); 
          setDescription(response.data.description || "");
          setCategory(response.data.category || ""); 
          setImage(response.data.image || ""); 
          // setRating(response.data.rating || ""); 
          setRate(response.data.rate || ""); 
          setCount(response.data.count || ""); 
          
          
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData(); 
    }, [productId]); 
      
      const handleUpdate = async () => {
        await axios.put(`https://e-commerce-node-black.vercel.app/updateProduct/${productId}`,{id , title,   price, description, category, image, rate, count });
        try {
          window.location.reload();
        } catch (error) {
          console.error('Product updation failed:', error);
        }
      };

  return (
    <div className='z-3 w-100 position-absolute top-50 start-50 translate-middle border shadow-lg  p-4 rounded-3 bg-black bg-gradient'>
    <div className="input-group mb-3">
    <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control floatingInput"  placeholder="id"/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control floatingInput"  placeholder="title"/>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control floatingInput"  placeholder="price"/>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control floatingInput"  placeholder="description"/>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control floatingInput"  placeholder="category"/>
          {/* <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} className="form-control floatingInput"  placeholder="rating"/> */}
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control floatingInput"  placeholder="image"/>
          <input type="text" value={rate} onChange={(e) => setRate(e.target.value)} className="form-control floatingInput"  placeholder="rate"/>
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} className="form-control floatingInput"  placeholder="count"/>
      </div>
      <div className='d-flex justify-content-end'>
          <Link to="/">
          <button onClick={handleUpdate} className="btn m-2 btn-outline-success" type="submit"> Save </button>
          </Link>
          <Link to="/">
            <button className="btn m-2 btn-outline-danger" type="button">Cancle</button>
          </Link>
      </div>    
      <Outlet/>
      </div>
  )
}

export default Popup;