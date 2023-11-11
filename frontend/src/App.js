import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ArticleLibrary from './components/ArticleLibrary/ArticleLibrary';
import VideoLibrary from './components/VideoLibrary/VideoLibrary';
import Shop from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleLibrary />} />
          <Route path="/videos" element={<VideoLibrary />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Define routes for article categories */}
          {/* <Route path="/articles/food" element={<FoodArticles />} />
          <Route path="/articles/drinks" element={<DrinkArticles />} /> */}
          {/* ... more category routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
