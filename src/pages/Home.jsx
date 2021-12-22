import React from 'react'
import Announcement from '../Component/Announcement'
import Categories from '../Component/Categories'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Newsletter from '../Component/Newsletter'
import Products from '../Component/Products'
import Slider from '../Component/Slider'


function Home() {
    return (
        <div> 
            <Announcement> </Announcement>
           <Navbar></Navbar>
           <Slider></Slider> 
           <Categories> </Categories>
           <Products></Products> 
           <Newsletter></Newsletter> 
           <Footer></Footer>
        </div>
    )
}

export default Home
