import "./Rated.scss";
import { useSelector } from "react-redux";

function Rated() {
    const saleStyle={
        fontSize:'13px',
        textDecoration: 'line-through'
    }

    const items = useSelector(state => state.items.allProducts);

  return (
    <section className='rated'>
        <div className='rated__container container'>
            <ul className='rated__list d-flex list-unstyled'>
                <li className='rated__item'>
                    <h2 className='rated__title'>Top Rated</h2>
                    <ul className="rated__product--list list-unstyled d-flex flex-column m-0">
                        {
                                items.map(item =>(
                                    item.topRated ? 
                                    <li key={item.id} className='rated__product--item d-flex'>
                                        <img className='rated__product--img' src={item.img} alt="" />
                                        <div className='rated__product--texts'>
                                            <h3 className='rated__product--tilte'>{item.name}</h3>
                                            {
                                                item.sale? 
                                                <span className='rated__product--sale'>€{item.saleCount}</span>:null
                                            }
                                            <span style={item.sale ? saleStyle : null} className='rated__product--price'>€{item.price}</span>
                                        </div>
                                    </li>:null
                                ))
                        }
                    </ul>
                </li>
                <li className='rated__item'>
                    <h2 className='rated__title'>Best Selling</h2>
                    <ul className="rated__product--list list-unstyled d-flex flex-column">
                        {
                                items.map(item =>(
                                    item.bestSelling ? 
                                    <li key={item.id} className='rated__product--item d-flex'>
                                        <img className='rated__product--img' src={item.img} alt="" />
                                        <div className='rated__product--texts'>
                                            <h3 className='rated__product--tilte'>{item.name}</h3>
                                            {
                                                item.sale? 
                                                <span className='rated__product--sale'>€{item.saleCount}</span>:null
                                            }
                                            <span style={item.sale ? saleStyle : null} className='rated__product--price'>€{item.price}</span>
                                        </div>
                                    </li>:null
                                ))
                        }
                    </ul>
                </li>
                <li className='rated__item'>
                    <h2 className='rated__title'>On Sale</h2>
                    <ul className="rated__product--list list-unstyled d-flex flex-column">
                        {
                                items.map(item =>(
                                    item.onSale ? 
                                    <li key={item.id} className='rated__product--item d-flex'>
                                        <img className='rated__product--img' src={item.img} alt="" />
                                        <div className='rated__product--texts'>
                                            <h3 className='rated__product--tilte'>{item.name}</h3>
                                            {
                                                item.sale? 
                                                <span className='rated__product--sale'>€{item.saleCount}</span>:null
                                            }
                                            <span style={item.sale ? saleStyle : null} className='rated__product--price'>€{item.price}</span>
                                        </div>
                                    </li>:null
                                ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Rated