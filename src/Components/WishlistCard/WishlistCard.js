import React from 'react'
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { removeWishlistItem } from '../../redux/ItemsSlice';


function WishlistCard({item}) {
    const dispatch = useDispatch();

    function removeHandler() {
        dispatch(removeWishlistItem(item.id))
    }
  return (
    <li className='wishlist__item d-flex align-items-center'>
        <button onClick={removeHandler} className='wishlist__remove--btn'><GrClose /></button>
        <div className='wishlist__img--wrap'>
            <img className='wishlist__img' src={item.img} alt="" />
        </div>
        <h3 className='wishlist__title'>{item.name}</h3>
        <span className='wishlist__price'>€{item.price}</span>
        <span className='wishlist__stock'>IN STOCK</span>
        <Link className='wishlist__link' to="/">SELECT OPTIONS</Link>
    </li>
  )
}
export default WishlistCard
