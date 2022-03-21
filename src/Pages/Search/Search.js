import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {data} from "../../Data/data"
import './Search.scss'
import { AiFillWarning } from "react-icons/ai";
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
 

function Search() {
  const val = useParams();
  const [btnActive,setBtnActive] = useState(3);
  const [itemHeight,setItemHeight] = useState(320);
  const items = useSelector(state => state.items.allProducts);

  useEffect(()=> {
    if(btnActive=== 3){
      setItemHeight(320)
    }
    else if(btnActive=== 4){
      setItemHeight(520)
    }
    else if(btnActive=== 6){
      setItemHeight(620)
    }
  },[btnActive])

  function changeActive(num) {
    return `search__btn ${btnActive === num ? 'search__btn--active' : ''}`
  }

  const searchedProducts = items.filter(item => item.name.toLocaleLowerCase().includes(val.inpVal.toLocaleLowerCase()))
  console.log(searchedProducts);  
  return (
    <section className='search'>
      <div className='search__container container'>
        <h2 className='search__title'>{searchedProducts.length} results for "{val.inpVal}"</h2>
        <div className='search__texts d-flex align-items-center justify-content-between'>
          <p className='search__desc'>SHOWING 1–12 OF 257 RESULTS</p>
          <ul className='search__btns list-unstyled d-flex '>
            <li onClick={()=> {setBtnActive(6)}} className={changeActive(6)}>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
            </li>
            <li onClick={()=> setBtnActive(4)} className={changeActive(4)}>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
            </li>
            <li onClick={()=> setBtnActive(3)} className={changeActive(3)}>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
              <div className='search__btn-div'></div>
            </li>
          </ul>
        </div>
        {
          searchedProducts.length === 0 ? 
          <span className='search__no-result'>{<AiFillWarning />} No products were found matching your selection.</span>
          : null
        }
        <ul className='search__products row list-unstyled p-0 m-0'>
          {
            searchedProducts.length !== 0 ?
            searchedProducts.map(item => (
              <li  style={{height:`${itemHeight}px`}} key={item.id} className={`search__product col-${btnActive}`}>
                <ProductCard item={item} style={true}/>
              </li>
            )): null
          }
        </ul>
        
      </div>
    </section>
  )
}

export default Search
