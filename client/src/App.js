//Components
import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchPage from './components/SearchPage';
import { Route, Routes, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
    <div className='appMain'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Search' element={<SearchPage />} />
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;
