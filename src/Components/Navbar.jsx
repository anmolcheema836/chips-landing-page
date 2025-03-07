import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Stylesheets/Navbar.css';
// import logo from '../Images/logo.png'

export default function Navbar() {
  const [checked, setChecked] = useState(false);
  let menuRef = useRef();
  let hamburgerRef = useRef();
  const location = useLocation();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target) && !hamburgerRef.current.contains(e.target)) {
        setChecked(false);
      }
    };

    document.addEventListener('mousedown', handler);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    // Reset checked state to false when the location changes (page is switched)
    setChecked(false);
  }, [location]);

  return (
    <div className="navbar">
      <div className="logo">
        {/* If you want to add a logo image, you can uncomment and use the following */}
        {/* <img src={logo} alt="Cheema Chips Logo" className='logoImg' /> */}
        <h1 className="logoTitle">Cheema Chips</h1> {/* Adding the title here */}
      </div>

      <label className="hamburger" ref={hamburgerRef}>
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>

      <ul className={checked ? "TabsContainer TabsContainerisActive" : "TabsContainer"} ref={menuRef}>
        <li className="tabs">
          <NavLink className="tabs-link" to="/Chips-Landing-Page/" aria-label="Home">
            Home
          </NavLink>
        </li>
        <li className="tabs">
          <NavLink className="tabs-link" to="/Chips-Landing-Page/About" aria-label="About Us">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
