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
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const user = localStorage.getItem("jwt")
  const [account, setAccount] = useState({})

  useEffect(()=> {
     const verify = async () => {
     const whoami = await axios.get(`http://localhost:3001/api/checkuser/${user}`)
     console.log(whoami)
     setAccount(whoami.data)
    }
    verify()
  }, [])

  return (
    <div className="App">
       <Header
        user={user}
        userName={account.userName} />
     <div className='appMain'>
       <Routes>
         {user && <Route path='/' element={<Main />} />}
         {user && <Route path='search' element={<SearchPage />} />}
         {user &&<Route path='search/:id' element={<Certificatedetails userId={account._id} userName={account.userName} pic={account.profilePic}/>}  /> }
         <Route path='/' element={<Navigate to="/login" />}/>
         <Route path='/signup' element={<Register />} />
         <Route path='/login' element={<Login />} />
       </Routes>
     </div>
       <Footer />
     </div>
  );
}

export default App;
