import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Careers from './components/Careers'
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Production from './components/Production';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import SocialBooth from './components/SocialBooth';
import Brands from './components/Brands'
import Posts from './Blog/Posts';
import Post from './Blog/Post';
import Login from './Login/Login.js';
import Registration from './Login/Registration';
function App() {
 
  return (
    <div className="App">
     

      <BrowserRouter>
      <Navbar />
      <SocialBooth />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/production' element={<Production />} />
          <Route path='/sustainability' element={<Sustainability />} />
          <Route path='/blog' element={<Posts />} />
          <Route path="/blog/:postId" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
