import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/style.css';
// import MainModel from './components/modal/MainModel';
// import Navbar from './components/Navbar/Navbar';
// import Modal from './components/modal/Modal';
// import CategoryItem from './components/category/CategoryCard/CategoryItem';
// import FooterContent from './components/footer/footerContent/FooterContent';
// import SocialIcon from './components/footer/socialIcon/SocialIcon';
// import Card from './components/card/Card';
import Home from "./components/pages/Home"
import Category from "./components/pages/Category";
import AboutMe from "./components/pages/AboutMe";
import Search from "./components/pages/Search";
import Coffee from "./components/pages/Coffee";
import Layout from "./components/pages/Layout";
// import Test from "./components/test/Test";
// import Banner from "./components/banner/Banner";
// import Subsribe from "./components/subScription/subsribe";
// import SearchComponent from "./components/search/Search";


function App() {
 
  // const dummyData = [
  //   'Apple',
  //   'Banana',
  //   'Cherry',
  //   'Date',
  //   'Fig',
  //   'Grape',
  //   'Kiwi',
  //   'Lemon',
  //   'Mango',
  //   'Orange',
  //   'Pear',
  //   'Strawberry',
  //   'Watermelon',
  // ];
  // Uses for NavBar Modal 
  return (
    <div className="">
      {/* <SearchComponent /> */}
      {/* <FooterContent /> */}
      {/* <SocialIcon /> */}
      <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/search" element={<Search/>} />
                <Route path="/coffee" element={<Coffee />}/>
            </Routes>
        </Layout>
      </BrowserRouter>
      {/* <CategoryItem /> */}
      {/* <SearchComponent dummyData={dummyData}/> */}
      {/* <Subsribe /> */}
      {/* <Card /> */}
      {/* <Test /> */}
    </div>
  )
}

export default App
