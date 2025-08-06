import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Spinner, Alert,Button } from 'react-bootstrap';
import { getproducts } from '../Server/Api';
import { Link } from 'react-router-dom';




function Shop() {

  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);       
    const [error, setError] = useState(null);
  

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
    const res = await getproducts()
    if(res.status==200){
      setProducts(res.data)
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

  
  
  return (
    <>
    <div className="container-fluid my-4">
      <h2 className="text-center mb-4">Collection </h2>

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

      {!loading && !error && (
      
      <Row>
        {products.map((product)=> (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className='h-100 shadow-sm p-1'>
              <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ height: '180px', objectFit: 'contain', padding: '10px' }}
        />
              <Card.Body className="d-flex flex-column" >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  
                  <strong>${product.price}</strong><br />
                  <small className="text-muted">{product.category}</small>
                </Card.Text>
                
                
                
              </Card.Body>
              <div className="d-flex align-items-center justify-content-center text-center mb-4">
                  <Link to={`/product/${product?.id}`} variant="outline-dark"  className="btn btn-secondary">View More</Link>
                </div>
                
            </Card>
          </Col>
        ))}
      </Row>
      )}

      
      
    </div>

    </>
  );
}

export default Shop