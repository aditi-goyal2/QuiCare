import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import ViewAll from './ViewAll';
import Product from './Product';
const App=()=>{
    return(
        <>
    <Router>
    <div className="App">
     <center>
        <Navbar/>
        </center>
      <Switch>
        <Route exact path="/">
          {/* <Home/> */}
          {/* <ViewAll/> */}
          <Product/>
        </Route>
        <Route exact path="/other-page">
            <Product/>
        </Route>
        <Route exact path="/about">
          <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
        
    );
}
export default App;