import './Services.scss'
import { TiPlaneOutline } from "react-icons/ti";
import { ImHeadphones } from "react-icons/im";
import { FiRefreshCcw } from "react-icons/fi";
import { BsGift } from "react-icons/bs";

function Services() {
  return (
    <section className='home__services services'>
        <div className='services__container container'>
        <ul className='services__list list-unstyled row'>
            <li className='services__item col-sm-3'>
            <TiPlaneOutline />
            <h2 className='services__title'>Free Shipping</h2>
            <p className='services__desc'>Free Shipping for all US order</p>
            </li>
            <li className='services__item col-sm-3'>
            <ImHeadphones />
            <h2 className='services__title'>Support 24/7</h2>
            <p className='services__desc'>We support 24h a day</p>
            </li>
            <li className='services__item col-sm-3'>
            <FiRefreshCcw />
            <h2 className='services__title'>100% Money Back</h2>
            <p className='services__desc'>You have 30 days to Return</p>
            </li>
            <li className='services__item col-sm-3'>
            <BsGift />
            <h2 className='services__title'>Payment Secure</h2>
            <p className='services__desc'>We ensure secure payment</p>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default Services
