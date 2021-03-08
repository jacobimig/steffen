import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(true);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    useEffect(()=> {
        const linksHeight = linksRef.current.getBoundingClientRect().height;  
        console.log(linksHeight);      
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight + 10}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    },  [showLinks]);
    return (
        <header >
            <div className="navMain">
                <h1>goleen steffen</h1>
                <button onClick={()=> setShowLinks(!showLinks)}>
                    <FaBars />                    
                </button>
            </div>
            <nav >    
                <div className='linksContainer' ref={linksContainerRef} >
                    <div ref={linksRef} >
                        <Link to='/'>Home</Link>
                        <Link to='/artwork'>Artwork</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </div>               
            </nav>
        </header>
    );
}

export default Navbar
