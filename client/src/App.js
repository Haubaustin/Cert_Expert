// //Components
import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchPage from './components/SearchPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import Certificatedetails from './components/Certificatedetails';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  const user = localStorage.getItem("token")

  return (
    <div className="App">
       <Header />
     <div className='appMain'>
       <Routes>
         {user && <Route path='/' element={<Main />} />}
         {user && <Route path='search' element={<SearchPage />} />}
         <Route path='/' element={<Navigate to="/login" />}/>
         <Route path='/signup' element={<Register />} />
         <Route path='/login' element={<Login />} />
         <Route path='search/:id' element={<Certificatedetails />} />
       </Routes>
     </div>
       <Footer />
     </div>
  );
}

export default App;
