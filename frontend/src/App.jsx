import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import SellerView from './components/seller/SellerView';

function App() {

  return (
    <>
     <Routes>
      <Route path='/register' Component={Register} />
      <Route path='/login' Component={Login} />
      <Route path='/seller' Component={SellerView} />
      <Route path='/' Component={Home}/>
     </Routes>
    </>
  ) 
}


export default App
