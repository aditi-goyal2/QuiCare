import Card from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import './view.css';
import { Link } from "react-router-dom";
const Img = ({sc,imid,imdes,use,indi,tit}) => {
    return ( 
        <div className="img-div"> 
            
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" className="card-img" src={sc}/>
              <hr/>
              <Card.Body>
                <Card.Title>{tit}</Card.Title>
                <br/>
                <Card.Text>
                 {imdes}
                </Card.Text>
                <Link to="/bigView">
                <Button variant="primary" >
                Show details</Button></Link>
              </Card.Body>
            </Card>
        </div>
     );
}
 
export default Img;