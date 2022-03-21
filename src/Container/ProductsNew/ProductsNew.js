import "./ProductsNew.scss";

function ProductsNew() {
  return (
    <section className='products-new'>
        <div className='products-new__container container'>
            <ul className='products-new__list list-unstyled d-flex '>
                <li className='products-new__item'>
                    <h2 className="products-new__title">Jobie <br/> Ice Cream</h2>
                    <span className='products-new__sale'>sale Off <span className='products-new__sale--count'>25%</span></span>
                    <span className='products-new__shop'>shop now</span>
                    <img className='products-new__img' src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner1_570x.jpg?v=1565666027" alt="prudct" />
                </li>
                <li className='products-new__item'>
                    <h2 className="products-new__title">Fresh <br/> Guava Juice</h2>
                    <span className='products-new__shop'>shop now</span>
                    <img className='products-new__img' src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner2_570x.jpg?v=1565666027" alt="prudct" />
                </li>
                <li className='products-new__item'>
                    <h2 className="products-new__title">Fresh <br/> Vegatables</h2>
                    <span className='products-new__shop'>shop now</span>
                    <img className='products-new__img' src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner3_570x.jpg?v=1565666027" alt="prudct" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default ProductsNew
