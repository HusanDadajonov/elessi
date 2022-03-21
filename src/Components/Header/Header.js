import React, { useEffect, useState } from 'react';
import { FiInstagram } from "react-icons/fi";
import HeaderTopItem from './HeaderTopItem/HeaderTopItem';
import { FaFacebookF,FaPinterest,FaRegUser } from "react-icons/fa";
import { AiOutlineTwitter,AiOutlineGooglePlus } from "react-icons/ai";
import { VscChevronDown,VscTriangleUp,VscHeart } from "react-icons/vsc";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import { data } from '../../Data/data';
import "./Header.scss";
import "./Nav.scss"
import { useDispatch, useSelector } from 'react-redux';
import { modalControl } from '../../redux/ItemsSlice';

function Header() {

    const [language,setLanguage] = useState("Eng");
    const [check,setCheck] = useState(false);
    const [animCount,setAnimCount] = useState(2);
    const [inpVal,setInpVal] = useState("");
    const wishListCount = useSelector(state => state.items.items);
    let navigate = useNavigate();
    const dispatch = useDispatch()
    
    function activeClass(val) {
        return `header__top--modal-item ${language === val ? "header__top--modal-item--active": ""}`
    }

    function modalOpenHandler() {
        dispatch(modalControl(true))
    }

    function formSubmit(e){
        e.preventDefault()
        if(inpVal.length !== 0){
            navigate(`/search/${inpVal}`)
        }
    
    }

    setTimeout(()=> {
        setAnimCount(7)
    },1000)

    setTimeout(()=> {
        setAnimCount(2) 
    },1500)

    window.addEventListener('scroll', (event) => {
        if(Math.round(window.scrollY) >= 75){
            setCheck(true)
        }
        else{
            setCheck(false)
        }
    });

    return (
        <header className='header'>
            <div className={`header__top ${check ? 'd-none' : ''}`}>
                <div className='header__top--container container'>
                    <div className='header__top--flex d-flex align-items-center  justify-content-between'>
                        <ul className='header__top--list p-0 m-0 list-unstyled d-flex align-items-center'>
                            <HeaderTopItem icon={<FaFacebookF/>}/>
                            <HeaderTopItem icon={<AiOutlineTwitter/>}/>
                            <HeaderTopItem icon={<AiOutlineGooglePlus/>}/>
                            <HeaderTopItem icon={<FaPinterest/>}/>
                            <HeaderTopItem icon={<FiInstagram/>}/>
                            <li className='header__top--item'>
                                <a href="tel:+0123456789" className='header__top--link'>call:+01 23456789</a>
                            </li>
                        </ul>
                        <div className='header__top--language -wrap position-relative'>
                            <button className='header__top-language p-0 bg-transparent border-0 d-flex align-items-center'>{language}<VscChevronDown/></button>
                            <ul className='header__top--modal m-0 position-absolute list-unstyled'>
                                <span className='header__top-language--triangle position-absolute'><VscTriangleUp/></span>
                                <li className={activeClass("Eng")} onClick={(e)=> setLanguage(e.target.textContent)}>Eng</li>
                                <li className={activeClass("Ru")} onClick={(e)=> setLanguage(e.target.textContent)}>Ru</li>
                                <li className={activeClass("Uzb")} onClick={(e)=> setLanguage(e.target.textContent)}>Uzb</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header__wrap'>
                <div className='header__container container'>
                    <div className='header__flex d-flex align-items-center justify-content-between'>
                        <Link to="/">
                            <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-logo_500x.png?v=1565666026" alt="site-logo" />    
                        </Link>
                        <form onSubmit={formSubmit} className='header__form d-flex'>
                            <label className='header__label'>
                                <input onChange={(e)=> setInpVal(e.target.value)} className='header__inp' type="search" placeholder='Search for products' autoComplete='off'/>
                            </label>
                            <button type='submit' className='header__btn'><IoSearchOutline /></button>
                        </form>
                        <ul className='header__links p-0 m-0 list-unstyled d-flex align-items-center'>
                            <li onClick={modalOpenHandler} className='header__links--item'>
                                <Link to="/">
                                    <FaRegUser />   
                                </Link>
                            </li>
                            <li className='header__links--item'>
                                <Link to="/wishlist">
                                    <span className='header__links--count'>{wishListCount.length}</span>
                                    <VscHeart />
                                </Link>
                            </li>
                            <li className='header__links--item'>
                                <Link to="/">
                                    <span className='header__links--count'style={{top:-animCount}} >0</span>
                                    <FiShoppingCart />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className='header__nav nav'>
                    <div className='nav__container container'>
                        <ul className='nav__list m-0 list-unstyled d-flex align-items-center'>
                            <li className='nav__item nav__item--categories'>
                                <Link className='nav__link' to="/">Shop by Categories</Link>  
                                <ul className='nav__item--modal nav__item--modal-categories list-unstyled m-0 p-0 w-100'>
                                {
                                    data.shopCategories.map(item => (
                                        <li key={item.id} className='nav__item--modal-li nav__item-categories'>
                                            <a href={item.link}>{item.text}</a>
                                        </li>
                                    ))
                                }
                                </ul>  
                            </li>
                            <li className='nav__item nav__item--arrow'>
                                <Link className='nav__link' to="/">demo<BsChevronDown/></Link>
                                <ul className='nav__item--modal list-unstyled m-0 p-0'>
                                    <li className='nav__item--modal-item d-flex'>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Home pages</h2>
                                            {
                                                data.homePages.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Niche layouts</h2>
                                            {
                                                data.nicheLayouts.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}{item.type ? <span className='nav__item--modal-type'>new</span> : null}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Niche layouts</h2>
                                            {
                                                data.nicheLayouts2.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav__item nav__item--arrow nav__item--sale'>
                                <Link className='nav__link' to="/">shop<BsChevronDown/></Link>
                                <ul className='nav__item--modal list-unstyled m-0 p-0'>
                                    <li className='nav__item--modal-item d-flex'>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Shop Styles</h2>
                                            {
                                                data.shopStyles.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled me-4'>
                                            <h2 className='nav__item--modal-title'>Product Page Styles</h2>
                                            {
                                                data.productPageStyles.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Product Types</h2>
                                            {
                                                data.productTypes.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Product Features</h2>
                                            {
                                                data.productFeatures.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav__item nav__item--arrow'>
                                <Link className='nav__link' to="/">blog<BsChevronDown/></Link>    
                            </li>
                            <li className='nav__item nav__item--arrow'>
                                <Link className='nav__link' to="/">pages<BsChevronDown/></Link>  
                                <ul className='nav__item--modal list-unstyled m-0 p-0'>
                                    <li className='nav__item--modal-item d-flex'>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Pages</h2>
                                            {
                                                data.pages.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Header</h2>
                                            {
                                                data.header.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li'>
                                                        <a href={item.link}>{item.text}{item.type ? <span className='nav__item--modal-type'>new</span> : null}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='nav__link--modal-list list-unstyled m-0 p-0'>
                                            <h2 className='nav__item--modal-title'>Shop</h2>
                                            {
                                                data.shop.map(item => (
                                                    <li key={item.id} className='nav__item--modal-li d-flex align-items-center'>
                                                        <a href={item.link}>{item.text === "Shopping Cart" ? <FiShoppingCart /> : null}{item.text === "My Account" ? <FaRegUser /> : null}{item.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>  
                            </li>
                            <li className='nav__item nav__item--sale'>
                                <Link className='nav__link' to="/">buy theme</Link>   
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
