import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const menu = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className='sticky top-0 z-20'>
            <div className='bg-purple-700 flex justify-evenly py-2'>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2 text-white'>
                        <BsEnvelope />
                        <h1>anikkhan1105@gmail.com</h1>
                    </div>
                    <div className='flex items-center gap-2 text-white'>
                        <MdOutlinePhoneInTalk />
                        <h1>+880 1704 952699</h1>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Link>
                        <div className='flex items-center gap-2 text-white'>
                            <span>Login</span><FaRegUser></FaRegUser>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex items-center gap-2 text-white'>
                            <span>Wishlist</span><AiOutlineHeart></AiOutlineHeart>
                        </div>
                    </Link>
                    <Link>
                        <div className='flex items-center gap-2 text-white'>
                            <span>Cart</span><AiOutlineShoppingCart></AiOutlineShoppingCart>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='bg-base-100'>
                <div className="navbar w-3/4 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <Link className="text-3xl font-bold"
                            style={{ fontFamily: 'Sofia', color: 'black' }} to="/"
                        >Furnishop</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn bg-pink-500 btn-square border-none hover:bg-pink-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style> @import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap'); </style>
        </div>
    );
};

export default Navbar;