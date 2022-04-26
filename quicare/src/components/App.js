import Home from './Home';
import Navbar from './Navbar';
import { useState } from 'react';
import Footer from './Footer';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Route,Routes,Switch,Link} from 'react-router-dom';
import QrCode from './QrCode';
import Login from './Login';
import Alert from 'react-bootstrap/Alert'
const App=()=>{
    const [isLogged,setIsLogged]=useState(0);
    return(
    <BrowserRouter>
    <div className="App">
     <center>
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
    </center>
      <Routes>
        <Route exact path='/' element={ <Home/>}>
        </Route>
        <Route exact path='g-qr' element={<QrCode isLogged={isLogged} setIsLogged={setIsLogged} />}>
        </Route>
        <Route exact path='login' element={<Login isLogged={isLogged} setIsLogged={setIsLogged}/> }> </Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  
        
    );
}
export default App;

