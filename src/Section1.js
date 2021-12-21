import React from 'react'
import'./Section1.css'
import circle from './Images/circle.png'
import second from './Images/second.png'
import first from './Images/first.png'
import third from './Images/third.png'

const Section1 = () => {
    return (
        <div className="section">
            <div className="how">
               <h1>How to earn with Kudi?</h1>
            </div>
            <div className='big'>
                    <div className="firstcircle">
                        <img src={circle} alt="" />
                        <img id='chai' src={first} alt="" />
                        <div className="textone">
                            <h1>Affiliate</h1>
                            <p>What you do as an affliate is to share these</p>
                            <p>ADs to your Facebook page daily and get paid</p>
                            <p>based on your activities and package.</p>
                        </div>    
                    </div>
                    <div className="seccircle">
                        <img src={second} alt="" />
                        <div className="textone">
                            <h1>Referer</h1>
                            <p>On kudi.com we reward every member's hard</p><p>work; Each package on has its own referral</p>bonus.
                        </div>
                    </div>
                    <div className="thirdcircle">
                        <img src={circle} alt="" />
                        <img id='wow' src={third} alt="" />
                        <div className='textone'>
                            <h1>Membership</h1>
                            <p>Practically anyone can be a member Kudi.com</p><p>as all you need is an internet enabled device.</p>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Section1
