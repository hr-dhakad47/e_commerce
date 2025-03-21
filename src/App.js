import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./Components/Home";
import AddCard from "./Components/AddToCard";
import Ecommerce from "./Components/Ecommerce";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navbar />} >
      <Route path="/" element={<Ecommerce />}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="AddCard" element={<AddCard/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;