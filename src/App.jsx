import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/Order/Order'
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import Allproducts from "./pages/allproducts/Allproducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <MyState>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
              </ProtectedRoutes>} />
        <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
<Dashboard />
            </ProtectedRoutesForAdmin>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addProduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
              </ProtectedRoutesForAdmin>} />
          <Route path="/updateProduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
              </ProtectedRoutesForAdmin>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
      </Router>
      <ToastContainer/>
    </MyState>
  
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'kaursidak297@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}