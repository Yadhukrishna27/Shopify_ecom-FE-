import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Placeorder from './Pages/Placeorder';
import Cart from './Pages/Cart';
import Feedback from './Components/Feedback';
import Header from './Components/Header';



function App() {

  return (

    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/order' element={<Placeorder/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cont' element={<Feedback/>}/>
    </Routes>

      
    </>
  )
}

export default App
