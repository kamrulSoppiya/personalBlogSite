// import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/style.css';
import CategoryItem from './components/category/CategoryItem';
import '.././src/components/category/category.module.scss';
// import Card from './components/card/Card';
// import Home from "./components/pages/Home"
// import Category from "./components/pages/Category";
// import AboutMe from "./components/pages/AboutMe";
// import Search from "./components/pages/Search";
// import Coffee from "./components/pages/Coffee";
// import Layout from "./components/pages/Layout";
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
  return (
    <div className="">
      <CategoryItem />
      {/* <SearchComponent dummyData={dummyData}/> */}
      {/* <Subsribe /> */}
      {/* <Card /> */}
      {/* <BrowserRouter>
      <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/search" element={<Search/>} />
              <Route path="/coffee" element={<Coffee/>} />
          </Routes>
          <Banner/>
      </Layout>
          
      </BrowserRouter> */}
    </div>
  )
}

export default App
