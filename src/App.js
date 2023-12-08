import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Galerija from './Galerija';
import Onama from './Onama';
import Kontakt from './Kontakt';

function App() {
  return (
    <Router>
    <>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/Galerija' Component={Galerija}/>
      <Route path='/Onama' Component={Onama}/>
      <Route path='/Kontakt' Component={Kontakt}/>
      <Route path='/' Component={Body}/>
    </Routes>
    <Footer/>
    </>
    </Router>
  )
}

export default App;
