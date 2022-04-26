import { useState,useEffect } from "react";
import GenerateQr from "./GenerateQr";
const QrCode=()=>{
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [flag,setFlag]=useState(0);
  const [value,setValue]=useState(0);
  function handleClick() {
    setFlag(1);
    setWord(temp);
  }
  
     return (
       <div className="App">
      <div className="input-box">
      <div className="gen">
        <input type="number" onChange={(e)=>{setValue(e.target.value)}} placeholder="No. of required QR"/>
        <input type="text" onChange={
          (e) => {setTemp(e.target.value)}}
          placeholder="Enter text to encode" />
        <button className="button" 
          onClick={handleClick}>
          Generate
        </button>
      </div>
      </div>
        {flag==1?<div style={{ display: "flex",flexDirection: "row" }}>
           <div>
             <GenerateQr txt={word} num={value}/>
            </div>
            </div> : null
      }
        </div>
     );
  
          
}
export default QrCode;