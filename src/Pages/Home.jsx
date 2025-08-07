import React from 'react'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
// import New from '../Components/New'
import Collections from '../Components/Collections'
import Feedback from '../Components/Feedback'
import About from './About'





function Home() {
  return (
    <>
    <Banner/>
    <div className="container-fluid  my-3">
      
      <Collections/>
      <About/>
      <Feedback/>
    </div>
    <Footer/>
    

    

    
    
    </>
  )
}

export default Home