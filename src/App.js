import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Footer from "./Components/Footer/Footer";
import Wishlist from "./Pages/Wishlist/Wishlist";
import AccountModal from "./Layout/AccountModal/AccountModal";
import Single from "./Pages/Single/Single";

function App() {
  return (
    <div className="App">
      <Header/>
      <AccountModal/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:inpVal" element={<Search />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/Single/:id" element={<Single />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
