import Footer from "./Footer";
import './App.css';
import ViewAll from "./ViewAll";

// import { Container } from '@mui/material';
const Home = () => {
    console.log("aaya hai");
    return ( 
        <div className="App">
        
        
          <div className="cont">
              <img src="1.png" className="image"/>
              <img src="2.png" className="image"/>
              <img src="3.png" className="image"/>
              </div>
                {/* <ViewAll/> */}
            <Footer/>
       
      </div>
     );
}
 
export default Home;