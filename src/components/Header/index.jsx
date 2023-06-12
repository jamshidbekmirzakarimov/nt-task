import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/icons/Header-logo.svg"
import Warning from "../../assets/icons/warning.svg"
import Burger from "../../assets/icons/burger-icon.svg"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      handleCloseMenu();
    }
  };
  return (
    <>
      <header className='site-header'>
        <div className="container">
          <div className="site-header-wrapper">
            <div className="site-header-start">
              <img className='logo-img' src={Logo} alt="logo" width={214} height={46} />
              <div className='warning-box'>
                <img src={ Warning } alt="warning" width={11} height={11} />
                <p className='warning-title'>
                Sayt test rejimida ishlamoqda!
                </p>
              </div>
            </div>
            <div className='site-header-end'>
              <button className='site-header-enter-btn'>Kirish</button>
              <button onClick={handleOpenMenu} className='site-header-burger'>
              <img className='site-header-burger-img' src={Burger} alt="burger" width={21} height={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={handleOverlayClick}
        className={`menu ${isOpen ? "active" : ""}`}
      >
        <div className="container">
          <div className="close-box">
            <button className="close-btn" onClick={handleCloseMenu}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_120)">
                  <path
                    d="M9.74729 10.691L4.70563 5.65764L5.88896 4.4743L10.9223 9.51597L15.9556 4.4743L17.139 5.65764L12.0973 10.691L17.139 15.7243L15.9556 16.9076L10.9223 11.866L5.88896 16.9076L4.70563 15.7243L9.74729 10.691Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_120">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.922302 0.690979)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <nav className="site-nav-burger">
            <ul className="site-nav-list-burger">
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Главная
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#services">
                  Услуги
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  О нас
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Отзывы
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Клиенты
                </a>
              </li>
              <li className="site-nav-item-burger">
                <a className="site-nav-link" href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
