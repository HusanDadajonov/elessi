import Hero from '../../Container/Hero/Hero';
import Services from '../../Container/Services/Services';
import TopCategories from '../../Container/TopCategories/TopCategories';
import SaleProuct from "../../Container/SaleProuct/SaleProuct";
import Seller from '../../Container/Seller/Seller';
import ProductsNew from '../../Container/ProductsNew/ProductsNew';
import Rated from '../../Container/Rated/Rated';
import Works from '../../Container/Works/Works';

function Home() {

  return (
    <>
      <Hero/>
      <Services />
      <TopCategories />
      <SaleProuct />
      <Seller />
      <ProductsNew/>
      <Rated />
      <Works />
    </>
    
  )
}

export default Home;
