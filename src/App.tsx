import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/css/style.css';
import Home from "./components/pages/Home"
import Category from "./components/pages/Category";
import AboutMe from "./components/pages/AboutMe";
import Search from "./components/pages/Search";
import Coffee from "./components/pages/Coffee";
import Layout from "./components/pages/Layout";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="">
      <BrowserRouter>
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
          
      </BrowserRouter>
    </div>
  )
}

export default App
