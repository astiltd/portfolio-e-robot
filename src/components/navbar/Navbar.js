import React from 'react'
import './navbar.css'
import ellipse from '../../assets/svg/Ellipse 19.svg'
import outline from '../../assets/svg/Group 5.svg'


const Navbar = () => {
  return (
    <div>
        <div className='nav-container'>
          <div className='wrapper'>
            <div className='nav-logo text-animation'><h1 style={{fontWeight: 800, fontSize:"35px"}}>Everyday <br/> Robots</h1></div>
              <div>
                <div className='menu' >
                  <h3 className='h3hover' style={{marginRight: "30px"}}><span>HOME</span></h3>  
                  <img className='scale-up-center' src={ellipse} alt='ellipse' style={{}}></img>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar