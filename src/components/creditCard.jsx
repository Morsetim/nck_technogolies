import React from 'react'

const CreditCard = ({
    cardNumber, 
    date
}) => {
    return (
        <div className="card-main">
            <div className='atm'>
            <div className="paywave svg">
                <img alt="card-icon" className="card-icon" src= 
                "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='56' viewBox='0 0 46 56'%3E%3Ctitle%3EContactlessIndicator 000%3C/title%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='6' stroke-linecap='round' d='m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5 0 0,1 0,28.5M3,19a18,17 0 0,1 0,18'/%3E%3C/svg%3E"/>
            </div>
            <div className="card-details">
            <div>
            <p className="card-num">Card Number</p>
            <p className="num-card">{cardNumber}</p>
            </div>
            <div className="paywave-chip">           
            <div className="chips svg">
                <img alt="chip-icon" className="chip-icon" src=
                "data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='50px' x='0px' y='0px' viewBox='0 0 40 40' style='enable-background:new 0 0 40 40;' xml:space='preserve'%3E%3Cg id='surface1'%3E%3Cpath fill='%23F5CE85' d='M8.9,34.5c-6.4,0.1-6.4,0.1-6.4-6.4V11.9c0-3.5-0.1-6.4,3.4-6.4h25.3c6.4,0,6.4,0,6.4,6.4v16.3 c0,6.4,0,6.4-6.4,6.4L8.9,34.5z'/%3E%3Cpath fill='%23967A44' d='M31.1,6C37,6,37,6,37,11.9v16.3c0,5.9,0,5.9-5.9,5.9H8.9c-5.9,0-5.9,0-5.9-6V11.9C3,8.2,2.7,6,6,6H31.1 M31.1,5H9.2C2.3,5,2,5,2,11.9v16.3C2,35,2,35,8.9,35h22.3c6.9-0.1,6.9-0.1,6.9-6.9V11.9C38.1,5,38.1,5,31.1,5z'/%3E%3Cpath fill='%23967A44' d='M29,35c-3.3,0-6-2.7-6-6s2.7-6,6-6h8.5v1H29c-2.8,0-5,2.2-5,5s2.2,5,5,5V35z'/%3E%3Cpath fill='%23967A44' d='M11,35v-1c2.8,0,5-2.2,5-5s-2.2-5-5-5H2.5v-1H11c3.3,0,6,2.7,6,6S14.3,35,11,35z'/%3E%3Cpath fill='%23967A44' d='M37.5,17H27c-2.2,0-4-1.8-4-4s1.8-4,4-4h2.1v1H27c-1.7,0-3,1.3-3,3s1.3,3,3,3h10.5V17z'/%3E%3Cpath fill='%23967A44' d='M28,16h1v7.5h-1V16z'/%3E%3Cpath fill='%23967A44' d='M13,17H2.5v-1H13c1.7,0,3-1.3,3-3s-1.3-3-3-3h-2.1V9H13c2.2,0,4,1.8,4,4S15.2,17,13,17z'/%3E%3Cpath fill='%23967A44' d='M11,16h1v7.5h-1V16z'/%3E%3C/g%3E%3C/svg%3E"
                />
            </div>
            </div>
            <div className="expiration">
            <div className="exp-info">
             <p>EXPIRATION DATE</p>
             <p>{date}</p>
             <p className="john">John Doe</p>
            </div>
            <div className="mastercard_icon svg"></div>
            </div>
            </div>          
        </div>
        </div>
    )
}


export default CreditCard
