import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { filterItems } from '../../redux/ItemsSlice';
import './Seller.scss';

function Seller() {
    const [btnActive,setBtnActive] = useState(1);
    const filtredArr = useSelector(state => state.items.filterItems);
    const dispatch = useDispatch();
    

    function changeACtive(val) {
        return `seller__item ${val == btnActive ? "seller__item--active" : ""}`
    } 

    useEffect(()=> {
        if(btnActive === 1 || btnActive === 4) dispatch(filterItems("fruits"));
        else if(btnActive === 2 || btnActive === 5) dispatch(filterItems("vegatables"));
        else if(btnActive === 3) dispatch(filterItems("milks"));

    },[btnActive])
    


    return (
        <section className='home__seller seller'>
            <div className='seller__container container'>
                <h2 className='seller__title'>Best Seller Product</h2>
                <ul className='seller__list list-styled d-flex align-items-center list-unstyled'>
                    <li className={changeACtive(1)} onClick={()=> setBtnActive(1)}>
                        <button className='seller__btn'>FRUITS</button>
                    </li>
                    <li className={changeACtive(2)} onClick={()=> setBtnActive(2)}>
                        <button className='seller__btn'>Vegetables</button>
                    </li>
                    <li className={changeACtive(3)} onClick={()=> setBtnActive(3)}>
                        <button className='seller__btn'>Milk & Cream</button>
                    </li>
                    <li className={changeACtive(4)} onClick={()=> setBtnActive(4)}>
                        <button className='seller__btn'>Banana</button>
                    </li>
                    <li className={changeACtive(5)} onClick={()=> setBtnActive(5)}>
                        <button className='seller__btn'>Sea Food</button>
                    </li>
                </ul>
                <ul className='seller__products list-unstyled p-0 m-0'>
                    {
                        filtredArr.map(item => (
                            <li key={item.id} className='seller__product'>
                                <ProductCard item={item} style={true}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Seller
