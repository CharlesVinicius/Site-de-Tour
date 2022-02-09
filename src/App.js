import logo from './logo.svg';
import './App.css';
import Slide from './components/Slide/Slide';
import "swiper/css/bundle";
import Navbar from './components/Navbar/Navbar';
import Aventura from './components/Aventuras/Aventuras';
import Shop from './components/Shop/Shop';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Pacotes from './components/Pacotes/Pacotes';
import Oferecemos from './components/Oferecemos/Oferecemos';
import Newslatter from './components/Newslatter/Newslatter';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Slide/>
     <Aventura/>
    {/*<Sobre/>*/}
    <Shop/>
    <Pacotes/>
    <Oferecemos/>
    <Reviews/>
    <Newslatter/>
    <Footer/>
    </div>
  );
}

export default App;
