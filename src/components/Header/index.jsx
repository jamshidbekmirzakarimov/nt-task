import React from 'react'
import "./Header.css"
import Logo from "../../assets/icons/Header-logo.svg"
import Warning from "../../assets/icons/warning.svg"
const Header = () => {
  return (
    <>
      <header className='site-header'>
        <div className="container">
          <div className="site-header-wrapper">
            <div className="site-header-start">
              <img src={Logo} alt="logo" width={214} height={46} />
              <div className='warning-box'>
                <img src={ Warning } alt="warning" width={11} height={11} />
                <p className='warning-title'>
                Sayt test rejimida ishlamoqda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
