import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import  Cart from "./pages/Cart"
import Productlist from "./pages/Productlist";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Success from "./pages/Success";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Component/Login/Login"



const App = () => { 

  return <AuthProvider> 
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="products/:category" element={<Productlist />}/> 
      <Route path="cart" element={<Cart/>}/> 
      <Route path="success" element={<Success/>}/> 
      <Route path="product/:id" element={<Product/>}/> 
      <Route  path="/login" element={<Login/>}  / >
    </Routes>
  </AuthProvider>
  
  ;
};

export default App;