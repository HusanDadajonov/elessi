import './topCategories.scss';
import { data } from '../../Data/data';

function TopCategories() {
  return (
    <section className='top-categories'>
        <div className='top-categories__container container'>
          <h2 className='top-categories__title'>Top Categories</h2>
          <ul className='top-categories__list list-unstyled d-flex'>
            {
              data.topCategories.map(item => (
                <li key={item.id} className='top-categories__item'>
                  <a className='top-categories__link text-decoration-none' href="#">
                    <div className='top-categories__img--wrap'>
                      <img className='top-categories__img' src={item.img} alt="top-categories" />
                    </div>
                    <h3 className='top-categories__name'>{item.text}</h3>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
    </section>
  )
}

export default TopCategories;
