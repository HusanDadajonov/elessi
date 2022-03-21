import React from 'react'
import { useSelector } from 'react-redux';
import WishlistCard from '../../Components/WishlistCard/WishlistCard';
import "./Wishlist.scss";

function Wishlist() {
    const wishListArr = useSelector(state => state.items.items);

    return (
        <section className='wishlist'>
            <div className='wishlist__container container'>
                <ul className='wishlist__table d-flex align-items-center list-unstyled'>
                    <li className='wishlist__table--item'>
                        <span className='wishlist__table--text'>PRODUCT NAME</span>
                    </li>
                    <li className='wishlist__table--item'>
                        <span className='wishlist__table--text'>UNIT PRICE</span>
                    </li>
                    <li className='wishlist__table--item'>
                        <span className='wishlist__table--text'>STOCK STATUS</span>
                    </li>
                </ul>
                <div className='wishlist__products'>
                    {
                        wishListArr.length === 0 ?
                        <span className='wishlist__warning'>No products were added to the wishlist</span>
                        : null
                    }
                    <ul className='wishlist__list d-flex flex-column'>
                        {
                            wishListArr.length != 0 ? 
                            wishListArr.map(item => (
                                <WishlistCard key={item.id} item={item}/>
                            )): null
                        }
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Wishlist;
