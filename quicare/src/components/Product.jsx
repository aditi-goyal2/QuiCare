import './product.css';
import Button from 'react-bootstrap/esm/Button';
const Product = ({im,tit}) => {
    const rand = Math.round((Math.random() * 2000)* 100) / 100;
    
    return ( 
        <div className="main-daba">
            <div className="left">
                <div className="above">
                <div className="one">
                    <img src="https://m.media-amazon.com/images/I/61yTcIjbPDL._SX679_.jpg"/>
                </div>
                <div className="two">
                    <h2>Health Aid MultiMax Multivitamin & Minerals For Women, 60 Tablets</h2>
                    <p>Manufacturer</p>
                    <p>AARKIOS HEALT PVT LTD</p>
                    <p>Consumer Type</p>
                    <p>ORAL</p>
                    <button style={{"background":"linear-gradient(#7b4397 , #dc2430)","color":"white"}}>In stock</button>
                </div>
                </div>
                <div className="below">
                    <h4>PRODUCT DETAILS</h4>
                    <br/>
                    <h5>Description</h5>
                    <p>HealthAid MultiMax for Women Tablets are specially formulated using the finest quality raw materials for maximum potency and benefit.</p>
                    <h5>Direction for Use</h5>
                    <ul>
                        <li>Women and girls over 12 years of age, one tablet daily with food.</li>
                        <li>Do not exceed recommended daily intake unless advised by a suitably qualified person.</li>
                    </ul>
                    <h5>Key Indegrients</h5>
                    <p>Multivitamins and Minerals</p>
                </div>
            </div>
            <div className="right">
                <h4>Price: Rs.{rand}</h4>
                <h6 style={{"textDecoration":"line-through"}}>MRP (Rs.{Math.round(rand*1.3)*100/100}) 30.00%OFF</h6>
                <p >Inclusive of all taxes</p>
                <h6>Bed Number</h6>
                <input type="number" placeholder="1 Bottle"/><p>60 Tablets in 1 Bottle</p>
                <Button variant="secondary" size="lg" style={{"background":"#fff","color":"#000","fontWeight":"bold"}} active>
                  Add to Cart
                </Button>
            </div>
        </div>
     );
}
 
export default Product;
