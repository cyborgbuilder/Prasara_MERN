import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import SocialBooth from './components/SocialBooth';
import Brands from './components/Brands'
import Posts from './Blog/Posts';
import Post from './Blog/Post';
import Login from './Login/Login.js';
import Registration from './Login/Registration';
import Dashboard from './Dashboard/Dashboard'
import Order from './Order/Order'
import OrderDetails from './Order/OrderDetails';
import OrderDetailsUser from './Order/OrderDetailsUser';
import ScrollToTop from './components/ScrollToTop';
import AllOrders from './Order/AllOrders';
import DashboardHome from './Dashboard/DashboardHome'
import UploadForm from './Blog/UploadForm';
import Users from './Dashboard/Users'
import UserDetails from './Dashboard/UserDetails';
function App() {
 
  return (
    <div className="App">
     

      <BrowserRouter>
      <Navbar />
      <SocialBooth />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sustainability' element={<Sustainability />} />
          <Route path='/blog' element={<Posts />} />
          <Route path="/blog/:postId" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/dashboard/*" element={<Dashboard />} >
            <Route index element={<DashboardHome />} />
            <Route path="order" element={<AllOrders/>} />
            <Route path="blog" element={<UploadForm/>} />
            <Route path="order/:id" element={<OrderDetails />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/order" element={<Order />} />       
          <Route path="/orderUser/:id" element={<OrderDetailsUser />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
