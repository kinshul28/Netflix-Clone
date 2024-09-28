import React, {useContext} from 'react';
import logo from "../logo.png"
import {Link} from 'react-router-dom'
// import Imsearch from 'react-icons/Imsearch'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FaSearch } from "react-icons/fa";
import {context2} from '../App.js'

const imgbaseurl= "https://image.tmdb.org/t/p/w500";


const Header = () => {
    const dataforbanner = useContext(context2);
    console.log(dataforbanner)

    
  return (
    <>
      <nav className='header'>
        <img id='logo' src={logo} alt="Logo" />

        <div>
        <Link to="/">TV shows</Link>
        <Link to="/">Movies</Link>
        <Link to="/">Recently added</Link>
        <Link to="/">My list</Link>

        </div>           
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#FFD43B",}} /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFD43B" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> */}
        {/* <span className ="material-symbols-outlined">search</span> */}
        <FaSearch />

      </nav>

      <div className='banner'
      style={{
        backgroundImage: dataforbanner[0]
            ? `url(${`${imgbaseurl}/${dataforbanner[(Math.random()*20).toFixed()].poster_path}`})`
            : "rgb(16, 16, 16)",
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover'
    }}>
        
      </div>  
    </>
  );
}

export default Header;
