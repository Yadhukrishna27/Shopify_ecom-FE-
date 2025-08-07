import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../Server/Api'
import { Spinner, Alert, Container, Card } from 'react-bootstrap';
import { addtoCart } from '../Server/Api';



function Product() {
 const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [quantity, setQuantity] = useState(1);

  const {id} =useParams()


   const addcart = async () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      // quantity: parseInt(quantity),
    };

    try {
      const res = await addtoCart(cartItem);
      alert('Product added to cart');
      navigate('/cart');
      console.log(res);
      
    } catch (err) {
      console.error("Add to cart failed", err);
      alert('Failed to add to cart');
    }
  };



  


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        console.log(res.data);
        if (res.data) {
          setProduct(res.data);
        } else {
          setError('Product not found.');
        }
      } catch (err) {
        setError('Failed to fetch product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);



  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-5 text-center">{error}</Alert>;
  if (!product) return null;

  
  

    
  return (
    <>
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">ID: {product.id}</div>
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">${product.price + 10 }</span>
                <span> ${product.price}</span>
              </div>
              <p className="lead">{product.description}</p>
              <div className="d-flex mt-4 ">
                
                <Link to={'/cart'} onClick={addcart} className="btn btn-outline-dark flex-shrink-0" type="button">
                  
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product