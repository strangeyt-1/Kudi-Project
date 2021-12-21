import React from 'react'
import './Our.css'
import pic4 from './Images/pic4.png'
const Our = () => {
    return (
        <div className='overall'>
            <div className='our'>
                <h1>Our Approach</h1>
                <h4>The program rewards users for delivering on certain tasks</h4>
            </div>
            <div className='join'>
                <img src={pic4} alt="" />
                <div className='com'>
                    <div>
                       <p>Kudi.com provides people with opportunity to take advantage</p>
                       <p>of the internet and turn our everyday social media into a tool</p>
                       <p> for making passive income.</p>
                    </div>
                  <div  className='online'>
                      <div className='text'>
                          <h4>Membership</h4>
                          <p>Signup to join Kudi for online</p> 
                          <p>opportunity that pays.</p>

                          <h4>Share ADs</h4>
                          <p>What you do as an affliate is to share these</p> ADs<p>
                          to your Facebook page daily and get paid.</p>
                      </div>
                      <div>
                          <h4>Choose a Package</h4>
                          <p>Select subscription packages. They’re</p> 
                          <p>proportional to the wages earned by</p>
                          <p>subscribers.</p>
                    
                          <h4>Get Paid</h4>
                          <p>Your activity earning will increase</p>
                          <p>based on the package you are on.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Our
