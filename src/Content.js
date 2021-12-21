import React from 'react'
import './Content.css'
import Images from'./Images/profile.png'
import basket from'./Images/basket.png'
import woman from'./Images/mainwoman.png'


const Content = () => {
    return (
        <div className='Content'>
            <div className='omo'>
                <div className='profile'>
                    <p><img src={Images} alt='' /> <span>7,420 Users</span></p>
                </div>
                <br></br>
                <div className='basket'>
                    <p><img src={basket} alt='' /> <span>8,908 Investments</span></p>
                </div>
                <div className='text'>
                    <p>....richer journey that leads to success.</p>
                    <h1>Welcome to Kudi</h1>
                    <p>The largest affiliate marketing company with the <br></br>fastest growing subscriber base in Africa</p>
                </div>
                <div className='btn'>
                    <button>Get Started</button>
                </div>
                <div className='womanpic'>
                    <img src={woman} alt="" />
                </div>


            </div>
            
            
        </div>
    )
}

export default Content
