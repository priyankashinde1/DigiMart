
import './App.css'
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'

import NoPage from './pages/noPage/NoPage'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'

import Dashboard from './pages/admin/dashboard/Dashboard'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer } from 'react-toastify'
import Order from './pages/order/Order'
import 'react-toastify/dist/ReactToastify.css';
import MyState from './context/data/myState'
import Cart from './pages/cart/Cart'
function App() {
 

  return (
   <MyState>

    <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={
       
          <Cart/>
        
      }></Route>



      <Route path='/productinfo/:id' element={<ProductInfo/>}></Route>


      <Route path='/dashboard' element={
        <ProtectedRoutesForAdmin>
          <Dashboard/>
        </ProtectedRoutesForAdmin>
      }></Route>


      <Route path='/addproduct' element={
        <ProtectedRoutesForAdmin>
          <AddProduct/>
        </ProtectedRoutesForAdmin>
      }></Route>

      <Route path='/updateproduct' element={
        <ProtectedRoutesForAdmin>
         <UpdateProduct/>
        </ProtectedRoutesForAdmin>

      }></Route>
      <Route path='/*' element={<NoPage/>}></Route>
    </Routes>
    <ToastContainer/>
  </Router>

    {/* </MyState> */}
    </MyState>


  )
}

export default App

//user
export const ProtectedRoute=({children})=>{
  const user=localStorage.getItem('user')
  if(user){
    return children
  }
  return <Navigate to={'/login'}/>
}
//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'priyanka123@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}