import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Spinner, Alert,Button, Pagination } from 'react-bootstrap';
import { getproducts } from '../Server/Api';
import { Link } from 'react-router-dom';

function Collections() {

const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);       
    const [error, setError] = useState(null);
     const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  

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

    const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Create pagination items
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }




  return (
    <>
    <div className="container-fluid ">
        <h3 className='text-center fw-bold mb-3'>Best Sellers</h3>
            <p className='text-center mb-3 mb-4'>
                Discover our newest collection of premium products designed for your lifestyle.
            </p>
      <div className="container ">
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
      <>
      <Row>
        {currentProducts.map((product)=> (
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
      <div className="d-flex justify-content-center mt-4">
            <Pagination>{paginationItems}</Pagination>
          </div>
      </>
      )}

      </div>
        
        
        
    </div>

    </>
  )
}

export default Collections