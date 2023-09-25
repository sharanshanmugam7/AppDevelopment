
import './App.css';
import { useEffect} from 'react';
import { Routes, useLocation, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/MainPage';
import Dashboard from './Components/DashBoard/DashBoard';
import MyAccount from './Components/DashBoard/Pages/MyAccount/MyAccount';
import Projects from './Components/DashBoard/Pages/Projects/Projects';
import Community from './Components/LogoBar/Community/Community';
import Notifications from './Components/LogoBar/Notifications/Notifications';
import { Blog } from './Components/LogoBar/blog/blog';
import { BlogDetails } from './Components/LogoBar/blogDetails/blogDetails';
import { BlogDetails1 } from './Components/LogoBar/blogDetails/blogDetails1';
import { BlogDetails2 } from './Components/LogoBar/blogDetails/blogDetails2';
import { BlogDetails3 } from './Components/LogoBar/blogDetails/blogDetails3';
import { BlogDetails4 } from './Components/LogoBar/blogDetails/blogDetails4';
import { BlogDetails5 } from './Components/LogoBar/blogDetails/blogDetails5';
import Shop from './Components/LogoBar/Shop/Shop';
import Tutorials from './Components/LogoBar/Tutorials/Tutorials';
import About from './Components/Footer/About/About';
import Privacy from './Components/Footer/Privacy/Privacy';
import Terms from './Components/Footer/Terms/Terms';
import FAQ from './Components/Footer/Faq/FAQ';
const ScrolltoTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrolltoTop/>
        <Logobar/>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/main' element={<MainPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog-details' element={<BlogDetails/>}></Route>
        <Route path='/blog-details1' element={<BlogDetails1/>}></Route>
        <Route path='/blog-details2' element={<BlogDetails2/>}></Route>
        <Route path='/blog-details3' element={<BlogDetails3/>}></Route>
        <Route path='/blog-details4' element={<BlogDetails4/>}></Route>
        <Route path='/blog-details5' element={<BlogDetails5/>}></Route>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/tutorials' element={<Tutorials/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='myaccount' element={<MyAccount/>}/>
              <Route path='projects' element={<Projects/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
