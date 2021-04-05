import React, { useEffect } from 'react';
import './Parallex1.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Parallex1() {
    useEffect(() =>{
        Aos.init({duration: 3000})
    }, []);
    return (
        <>
           <div className='main'>
                <h3>BookVirus.In</h3>
                <a href='#'>Sign Up</a>
          </div>
           <div className='divider' >
               <h3 ><strong data-aos="zoom-out">BookVirus.In</strong>, a perfect place to Buy Books in affordable price from Around the Globe</h3>
               <h4 >You can buy as well as sell books </h4>
               <h5>5% of our sale goes to students of poor background</h5>
               <p>Connect us with:-</p>
           </div>
           
           <div className='nav_main'> 
              <li> <a href='$'>Sign In</a></li>
                 <h3>BookVirus.In</h3>
               <li><a href='^'>Info</a></li>

           </div>
           
           
        </>
    )
}

export default Parallex1
