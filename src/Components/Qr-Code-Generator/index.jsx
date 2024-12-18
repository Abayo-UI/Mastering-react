import "./styles-6.css";
import "bootstrap/dist/css/bootstrap.min.css"
import QRCode from "react-qr-code";

export default function QrCodeGenerator(){
    return (
        <div class="Qr-code-container"> 
            <h4>Qr Code Generator</h4>
            <div>
            <input type="text" name="qrcode" class="rounded-3 p-2"/>
            <button class="btn btn-secondary ms-2 border border-1 border-dark">Generate</button>
            </div>
            <QRCode/>
        </div>
    )
}