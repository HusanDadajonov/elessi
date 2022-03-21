import { useState } from "react";
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import ProductCard from '../../Components/ProductCard/ProductCard';
import "./saleProuct.scss"


function SaleProuct() {
    const data = useSelector(state => state.items.allProducts)
    const saleProducts = data.filter(item => item.sale);
    const [sliderTransform,setSliderTransform] = useState(0);
    const [sliderBarTransform,setSliderBarTransform] = useState(0)
  
    const saleStyle={
      fontSize:'13px',
      textDecoration: 'line-through',
    }
  
    function sliderHandler(val) {
      setSliderTransform(val % saleProducts.length * 817);
      setSliderBarTransform(val % saleProducts.length * 175);
    }
  
  return (
    <section className='home__sale-prouct sale-prouct'>
    <div className='sale-prouct__container container'>
        <div className='sale-prouct__box d-flex justify-content-between'>
          <div className='sale-prouct__wrap'>
            <div style={{width:`${saleProducts.length * 300}px`}} className='sale-prouct__slide'>
              <ul style={{transform:`translateX(-${sliderTransform}px)`}} className='sale-prouct__list d-flex list-unstyled'>
                  {
                    saleProducts.map((item,i) => (
                      <li  key={item.id} className='sale-prouct__item d-flex'>
                        <div className="sale-prouct__blok">
                          <ProductCard item={item} style={false} />
                        </div>
                        <div className='ps-5 sale-prouct__texts'>
                          <h2 className='sale-prouct__name'>{item.name}</h2>
                          <div className='d-flex align-items-center mb-4'>
                            <span className='product-card__count' style={saleStyle}>€{item.price}</span>
                            <span className='product-card__sale--count'>€{item.saleCount}</span>
                          </div>
                          <div className='d-flex align-items-center justify-content-between'>
                            <span className="sale-prouct__stock-available">Available: <strong>75</strong></span> 
                            <span className="sale-prouct__stock-sold">Already Sold: <strong>25</strong></span>
                          </div>
                          <span className='sale-prouct__progress'>
                            <div className="sale-prouct__anim"></div>
                          </span>
                          <div className='sale-prouct__btns d-flex align-items-center'>
                            <button value={i - 1} onClick={(e)=> sliderHandler(e.target.value)} className='sale-prouct__btn d-flex align-items-center'><BsChevronLeft className='me-2' />Prev deal</button>
                            <span style={{color:"#ccc",margin:"0 20px 0 20px"}}>|</span>
                            <button className='sale-prouct__btn d-flex align-items-center' value={i + 1} onClick={(e)=> sliderHandler(e.target.value)}>Next deal <BsChevronRight className='ms-2' /></button>
                          </div>
                        </div>
                      </li>
                    ))
                  }
              </ul>
              
            </div>
          </div>
          <div className='sale-prouct__bar--wrap'>
            <ul className='sale-prouct__bar list-unstyled m-0 p-0' style={{transform:`translateY(-${sliderBarTransform}px)`}}>
              {
                saleProducts.map((item,i) => (
                  <li onClick={(e)=> sliderHandler(e.target.value)} key={item.id} value={i} className='sale-prouct__bar--item'>
                    <img className='sale-prouct__bar--img' src={item.img} alt="" />
                  </li>
                ))  
              }
            </ul>
          </div>
        </div>
    </div>
  </section>
  )
}

export default SaleProuct;