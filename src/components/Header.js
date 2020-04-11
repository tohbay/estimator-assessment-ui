import React from 'react'
import logo from '../images/sdg.png'

const Header = () => {
  return (
    <div>
    <img src={logo} alt="SDG Logo" />
    <div>
    <h1>Covid-19 Estimator Assessment</h1>
    <p>A simple impact estimator for proper planning</p>
    </div>
    
    </div>
  );
}

export default Header;