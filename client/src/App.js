// //Components
import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchPage from './components/SearchPage';
import { Route, Routes, } from 'react-router-dom';
import Certificatedetails from './components/Certificatedetails';



function App() {
  return (
    <div className="App">
       <Header />
     <div className='appMain'>
       <Routes>
         <Route path='/' element={<Main />} />
         <Route path='search' element={<SearchPage />} />
         <Route path='search/:name' element={<Certificatedetails />} />
       </Routes>
     </div>
       <Footer />
     </div>
  );
}

export default App;
