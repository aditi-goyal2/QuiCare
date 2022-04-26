import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
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
          <Home/>
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

