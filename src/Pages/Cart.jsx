import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Table, Form, Image, InputGroup, Spinner, Alert } from 'react-bootstrap'
import { getcartdata ,deletecard } from '../Server/Api';



function Cart() {
   const [quantity, setQuantity] = useState(1);
   const [loading, setLoading] = useState(true);       
     const [error, setError] = useState(null);
 const [cartItems, setCartItems] = useState([]);
   const [coupon, setCoupon] = useState('');
  const shipping = 30;

  useEffect(()=>{
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try{
      const res = await getcartdata()
      if(res.status==200){
        const updatedItems = res.data.map(item => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(updatedItems);
        
        setError(null);
      }
      else {
          setError("Failed to load products. Please try again.");
        }
      } catch(err) {
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
      }



      // Delete Function

      const handleDelete = async (id) => {
       try {
      await deletecard(id);
      setCartItems(prev => prev.filter(item => item.id !== id));
      alert('Item removed from cart');
    } catch (err) {
      alert('Failed to delete item');
      console.error(err);
    }
  };   

  // handle Quantity
  


  const handleQuantityChange = (id, type) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const updatedQty = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return {
            ...item,
            quantity: updatedQty > 0 ? updatedQty : 1,
          };
        }
        return item;
      })
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal + shipping;


  return (
    <>
    <div className="container my-4">
       <h4 className='mb-3'>Shopping Cart</h4>

       {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && cartItems.length === 0 && (
        <Alert variant="info" className="text-center">
          Your cart is empty.
        </Alert>
      )}

      
      <Table  bordered hover>
        <thead className='mb-3'>
          <tr className="text-center">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        {cartItems.map((item)=>(
          <tbody>
          <tr className="align-middle text-center">
            <td className='' style={{height:"15rem", width:"15rem"}} >
              <Image src={item.image} fluid xs={3}  /></td>
            <td>{item.title}</td>
            <td><strong>${(item.price * item.quantity).toFixed(2)}</strong></td>
            <td>
              <Button variant="light" onClick={() => handleQuantityChange(item.id, 'decrease')}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="light" onClick={() => handleQuantityChange(item.id, 'increase')}>+</Button>
                  </td>
            <td><Button onClick={() => handleDelete(item.id)} variant="danger" size="sm" className="w-100">
              Delete
                </Button></td>
          </tr>
        </tbody>

        ))}
        
        
      </Table>

      {/* <Row className="mb-3">
        <Col md={3}>
          <Button variant="danger">Reset Cart</Button>
        </Col>
        
        <Col md={4} className="text-end">
          <Button variant="dark">Update Cart</Button>
        </Col>
      </Row> */}

      <Row className="justify-content-end">
        <Col md={4}>
          <h5>Cart totals</h5>
          <Table bordered size="sm">
            <tbody>
              <tr>
                    <td>Subtotal</td>
                    <td>${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Shipping Charge</td>
                    <td>${shipping.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${total.toFixed(2)}</strong></td>
                  </tr>
            </tbody>
          </Table>
          <Button variant="dark" className="w-100">Proceed to Checkout</Button>
        </Col>
      </Row>
    


    </div>
    
    
    </>
  )
}

export default Cart