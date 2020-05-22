import React,{useContext} from 'react';
import { BookContext } from '../contexts/bookContext';

const Navbar = (props) => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="navbar center white-text">
            <h1>Akshay's Reading List</h1>
            <nav className="nav-wrapper grey center">
                <span className="brand-logo left">Books!</span>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <br/>
            <p>Currently you have {books.length} books in your list.</p>
        </div>
     );
}
 
export default Navbar;