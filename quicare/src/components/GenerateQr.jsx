import QRCode from "qrcode.react";
import './style.css'
const GenerateQr=(props)=>{
    const {txt,num}=props;
    
    const downloadQRCode = () => {
        
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${txt}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
    
    
    let list=[];
    for(let i=0;i<num;i++)
    {
       const p=`${txt}/${i}`;
       console.log(p);
        list.push(<div className="beautify">
            <QRCode id="qr-gen" value={p} />
            {/* <button type="button" onClick={downloadQRCode()}>
              Download QR Code
              </button> */}
            </div>)
    }
    return list;
}
export default GenerateQr;