import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Placeorder from './Pages/Placeorder';
import Cart from './Pages/Cart';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/order' element={<Placeorder/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>

      
    </>
  )
}

export default App
