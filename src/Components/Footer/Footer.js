import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook,BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle,AiFillGooglePlusCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { data } from '../../Data/data';
import "./Footer.scss"

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <div className='footer__wrap mb-5 d-flex align-items-center justify-content-between'>
                <Link className='footer__logo--link' to="/">
                    <img className='footer__logo' src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-retina-logo_180x.png?v=1565666026" alt="logo" />
                </Link>
                <ul className='footer__links list-unstyled d-flex align-items-center'>
                    <li className='footer__links--item'>
                        <a className='footer__links--link' href="#"><BsFacebook /></a>
                    </li>
                    <li className='footer__links--item'>
                        <a className='footer__links--link' href="#"><AiFillTwitterCircle /></a>
                    </li>
                    <li className='footer__links--item'>
                        <a className='footer__links--link' href="#"><AiFillGooglePlusCircle /></a>
                    </li>
                    <li className='footer__links--item'>
                        <a className='footer__links--link' href="#"><BsPinterest /></a>
                    </li>
                    <li className='footer__links--item'>
                        <a className='footer__links--link' href="#"><FaInstagramSquare /></a>
                    </li>
                </ul>
                <div className='footer__inps d-flex align-items-center'>
                    <h2 className='footer__title'>Newsletter</h2>
                    <form className='footer__form d-flex'>
                        <input className='footer__inp' type="email" placeholder='Enter your email' />
                        <button className='footer__btn' type='submit'>subsctibe</button>
                    </form>
                </div>
            </div>
            <div className='footer__row row'>
                <div className='footer__col col-3'>
                    <ul className="footer__list list-unstyled">
                        {
                            data.footer1.map(item => (
                                <li key={item.id} className='footer__item'>
                                    <a className='footer__item--link' href="#">{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>  
                <div className='footer__col col-3'>
                    <ul className="footer__list list-unstyled">
                        {
                            data.footer2.map(item => (
                                <li key={item.id} className='footer__item'>
                                    <a className='footer__item--link' href="#">{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='footer__col col-3'>
                    <ul className="footer__list list-unstyled">
                        {
                            data.footer3.map(item => (
                                <li key={item.id} className='footer__item'>
                                    <a className='footer__item--link' href="#">{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='footer__col col-3'>
                    <ul className='footer__list footer__list--last list-unstyled'>
                        <li className='footer__item d-flex align-items-center justify-content-between'>
                            <span className='footer__day'>Monday - Friday</span>
                            <time dateTime='08-20' className='footer__time'>08:00 - 20:00</time>
                        </li>
                        <li className='footer__item d-flex align-items-center justify-content-between'>
                            <span className='footer__day'>Saturday</span>
                            <time dateTime='08-20' className='footer__time'>09:00 - 21:00</time>
                        </li>
                        <li className='footer__item d-flex align-items-center justify-content-between'>
                            <span className='footer__day'>Sunday</span>
                            <time dateTime='08-20' className='footer__time'>13:00 - 22:00</time>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
