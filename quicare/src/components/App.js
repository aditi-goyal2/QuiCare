import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Route,Routes,Switch,Link} from 'react-router-dom';
import QrCode from './QrCode';
const App=()=>{
    return(
        
    <BrowserRouter>
    <div className="App">
     <center>
        <Navbar/>
    </center>
      <Routes>
        <Route exact path='/' element={ <Home/>}>
         
        </Route>
        <Route exact path='g-qr' element={<QrCode/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  
        
    );
}
export default App;

