import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
// import New from '../Components/New'
import Collections from '../Components/Collections'
import Feedback from '../Components/Feedback'




function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <div className="container my-3">
      
      <Collections/>
      <Feedback/>
    </div>
    <Footer/>
    

    

    
    
    </>
  )
}

export default Home