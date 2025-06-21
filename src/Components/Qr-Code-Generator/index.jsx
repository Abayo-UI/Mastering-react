import "./styles-6.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from "react-qr-code";
import { useState } from "react";
 
export default function QrCodeGenerator(){
    const [ input, setInput ] = useState('');
    const [ qrCode, setQrCode] = useState('');
    const [ display, setDisplay ] = useState(false);
    const [ clicks, setClicks ] = useState(0)
    
    function handleChange(event){
        setInput(event.target.value);
        if( clicks > 0 ) setQrCode(input);
        console.log(event.target.value);
    }

    function handleClick(){
        setQrCode(input);
        setDisplay(true);
        setClicks(clicks + 1)
    }

    return (
        <div class="Qr-code-container"> 
            <h4>Qr Code Generator</h4>
            
            <div>
            <input 
            type="text" 
            name="qrcode" 
            placeholder="Enter your value here" 
            class="rounded-3 p-2"
            value={input}
            onChange={(e) => handleChange(e)}
            />
            <button
            onClick={handleClick} 
            class="btn btn-secondary ms-2 border border-1 border-dark">
            Generate</button>
            </div>
            
            <QRCode 
            value={qrCode} 
            style={{marginTop:"1.7rem", marginBottom:"0.5rem"}}
            />
            {
            (<div class={display ? "active" : "inactive"}><p>Qr Code for <strong>{input}</strong></p>
            <p class="text-center">Try Scanning it</p></div>)
            }
        </div>
    )
}