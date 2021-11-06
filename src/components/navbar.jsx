import React from 'react'
import profile from '../images/profile.jpg';
import Logo from '../images/logo_sig.png';

const Navbar = () => {
    const navlist = ['trips', 'recently viewed','bookings'];
    
    return (
        <div className='nav'>
            <img alt="nck" className="logo" src={Logo}/>
            <div className="navlist">
                {navlist.map(item => <p key={item} className='nav-item'>{item}</p>)}
                <img className='profile' src={profile} alt='profile'/>
            </div>
        </div>
    )
}

export default Navbar
