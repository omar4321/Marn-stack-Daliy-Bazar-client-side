import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import  Cart from "./pages/Cart"
import Productlist from "./pages/Productlist";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";



const App = () => { 
  const user = true
  return <> 
    
    
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="products/:category" element={<Productlist />}/> 
      <Route path="cart" element={<Cart/>}/> 
      <Route path="product/:id" element={<Product/>}/> 
      <Route path="login" element={user? <Navigate to="/"/> : <Login/>}/> 
      <Route path="Register" element={user? <Navigate to="/"/> : <Register/>}/> 
      </Routes>
  
    
    

  </>;
};

export default App;