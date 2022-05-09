import { Component } from 'react';
import './styles.css'
// import { Link, useLocation } from 'react-router-dom';

class ShopNavbar extends Component {
    render() {
        return (
            <div className='nav_card'>
                <h1 className='logo' alt='logo'>Shopping App</h1>
                <nav>
                    <ul className='nav_links'>
                        <li><a key='concerts' href='/'>Home</a></li>
                        <li><a key='experience' href='/categories'>Categories</a></li>
                        <li><a key='profile' href='/products'>Products</a></li>
                    </ul>
                </nav>
                <a href='/cart'><button className='btn_register'>Shopping Cart</button></a>
            </div>
        );
    }
}

export default ShopNavbar;