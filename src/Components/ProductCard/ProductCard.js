import React, { useState } from 'react'
import './ProductCard.scss'
import { AiOutlineHeart,AiFillHeart,AiOutlineEye } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/ItemsSlice';
import { useNavigate } from 'react-router-dom';

function ProductCard({item,style}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saleStyle={
        fontSize:'13px',
        textDecoration: 'line-through'
    }

    function wishListHandler() {
        dispatch(addItem(item))
        if(item.save) navigate('/wishlist')
    }

    function producHandler() {
        const id = item.id;
        navigate(`/Single/${id}`)
    }


  return (
    <div className='product-card' >
        <div className='product-card__img--wrap'>
            {
                item.sale?
                <span className='product-card__sale--percent'>{item.salePercent}%</span>
                : null
            }
            <span className='product-card__view'><AiOutlineEye /></span>
            <span className='product-card__bag'><BsHandbag /></span>
            <div  className='product-card__wishlist' style={item.save ? {color:"red"} : null} onClick={wishListHandler}>{item.save ? <AiFillHeart /> : <AiOutlineHeart />}</div>
            <img onClick={producHandler} className='product-card__img' src={item.img} alt="" />
            <img onClick={producHandler} className='product-card__img--hover' src={item.img2} alt="" />
        </div>
        {
            style ?
            <>
                <h3 className='product-card__name'>{item.name}</h3>
                <div className='product-card__counts d-flex align-items-center'>
                    <span className='product-card__count' style={item.sale ? saleStyle : null}>€{item.price}</span>
                    {
                        item.sale?
                        <span className='product-card__sale--count'>€{item.saleCount}</span>
                        : null
                    }
                    
                </div>
            </>: null
        }       
    </div>
  )
}
export default ProductCard
