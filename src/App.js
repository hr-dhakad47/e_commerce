import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';


function App() {

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
    axios
      .get(
        "https://e-commerce-node-black.vercel.app/productsList"
      )
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSendMessage = async () => {
    try {
      await axios.post("https://e-commerce-node-black.vercel.app/addProducts",{id , title, price, description, category, image, rate, count });
    } catch (error) {
      console.error('Message sending failed:', error);
    }
  };
 
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://e-commerce-node-black.vercel.app/deleteProduct/${productId}`);
      window.location.reload();
    } catch (error) {
      console.error('Product deletion failed:', error);
    }
  };


    const handleRefresh = () => {
      window.location.reload();
    }
    const handleButtonClick = () => {
      handleSendMessage();
      handleRefresh();
    };
  
  
  return(
  
  <>
  
    <table className="table table-dark table-striped-columns">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
      {/* <th scope="col">Rating</th> */}
      <th scope="col">Rate</th>
      <th scope="col">Count</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  {msg.map((product,index)=>{
    return(
     <tbody>
    <tr>
     
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td> <img
        width={"100%"} height="50px"
          src={product.image}
          alt='img'
          className="card-img-top"/>
      </td>
      {/* <td>{product.rating}</td> */}
      <td>{product.rate}</td>
      <td>{product.count}</td>
      <td>
      <div className='d-flex justify-content-evenly'>
      <Link to={`/Popup/${product._id}`}>
         <button type="button" className="btn btn-warning">UPDATE</button>
      </Link>
           <button onClick={() => handleDelete(product._id)} type="button" className="btn btn-danger">DELETE</button>
      </div>

      </td>
    </tr>
  </tbody>
  )
})}</table>

<>
  <div className="input-group fixed-bottom mb-3">
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control floatingInput"  placeholder="id"/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control floatingInput"  placeholder="title"/>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control floatingInput"  placeholder="price"/>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control floatingInput"  placeholder="description"/>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control floatingInput"  placeholder="category"/>
          {/* <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} className="form-control floatingInput"  placeholder="rating"/> */}
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-control floatingInput"  placeholder="image"/>
          <input type="text" value={rate} onChange={(e) => setRate(e.target.value)} className="form-control floatingInput"  placeholder="rate"/>
          <input type="text" value={count} onChange={(e) => setCount(e.target.value)} className="form-control floatingInput"  placeholder="count"/>
          <button onClick={handleButtonClick}className="btn btn-primary" type="submit"> Send </button>
      </div>
      <Outlet/>
  </>

</>)
}

export default App;