import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import "./Single.scss"

function Single() {
    const singleItemId = useParams();
    const allItems = useSelector(state => state.items.allProducts);
    const singleItem = allItems.filter(item => item.id === singleItemId.id);
    const [singleActive,setSingleActive] = useState(1);
    const saleStyle={
        fontSize:'16px',
        textDecoration: 'line-through'
    }

    function changeACtive(val) {
        return `single__bar--item ${val == singleActive ? "single__bar--item-active" : ""}`
    }   

    return (
        <section className='single'>
            <div className='single__container container'>
                <div className='single__wrap d-flex'>
                    <ul className='single__bar m-0 list-unstyled'>
                        <li onClick={()=> setSingleActive(1)} className={changeACtive(1)}>
                            <img className='single__bar--img' src={singleItem.length != 0 ? singleItem[0].img : ""} alt="" />
                        </li>
                        <li onClick={()=> setSingleActive(2)} className={changeACtive(2)}>
                            <img className='single__bar--img' src={singleItem.length != 0 ? singleItem[0].img2 : ""} alt="" />
                        </li>
                    </ul>
                    <div className='single__card ms-3'>
                        {
                            singleItem[0].sale?
                                <span className='product-card__sale--percent'>{singleItem[0].salePercent}%</span>
                            : null
                        }
                        <div className='single__wishlist' style={singleItem[0].save ? {color:"red"} : null} >{singleItem[0].save ? <AiFillHeart /> : <AiOutlineHeart />}</div>
                        <img style={singleActive == 2 ? {opacity:"0"}  : null} className='single__card--img' src={singleItem.length != 0 ? singleItem[0].img : ""}alt="" />
                        <img className='single__card--img' src={singleItem.length != 0 ? singleItem[0].img2 : ""} alt="" />
                    </div>
                    <div className='single__texts ms-5'>
                        <h2 className='single__title'>{singleItem[0].name}</h2>
                        <p className='single__sold'><span>13</span> sold in last <span>13</span> hours</p>
                        <div className='d-flex align-items-center'>
                            <span className='single__price' style={singleItem[0].sale ? saleStyle : null}>${singleItem[0].price}.00</span>
                            {
                                singleItem[0].sale ?
                                <>
                                     <span className='single__sale ms-1'>${singleItem[0].saleCount}.00</span>
                                     <span className='single__precent ms-1'>{singleItem[0].salePercent}%</span>
                                </>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Single
