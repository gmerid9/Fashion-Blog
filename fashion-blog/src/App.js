import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Article1 from './Components/Article1';
import Article2 from './Components/Article2';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Nav />
     <Article1 />
     <Article2/>
     <Footer />

     {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Women's" element={<Women/>}/>
      <Route path="/men's " element={<Men/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
