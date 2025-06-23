import "./styles-1.css";
import { useState } from "react";

function Colorgenerator(){

    const [ backgroundColor, setBackgroundColor ] = useState("#9F77B8");
    const [ colorValue, setColorValue ] = useState("HEX Color");

    function changeToRGB(){
      setColorValue("RGB Color");

      const red = Math.floor(Math.random() * 155);
      const blue = Math.floor(Math.random() * 155);
      const green = Math.floor(Math.random() * 155);
      const rgb = `rgb(${red}, ${blue}, ${green})`
      
      setBackgroundColor(rgb);
    }

    function changeToHEX(){

        let hex = "";

        function pickingValues(){
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const letters = [ 'A', 'B', 'C', 'D', 'E', 'F'];

        const randomNumber = Math.floor(Math.random() * (numbers.length - 1));
        const randomLetter = Math.floor(Math.random() * (letters.length - 1));
        
        const selectedNumber = numbers[randomNumber];
        const selectedLetter = letters[randomLetter];
        
        return  selectedNumber + selectedLetter;
    }

    hex = "#";
    hex += pickingValues();
    hex += pickingValues();
    hex += pickingValues();

    setBackgroundColor(hex);
    setColorValue("HEX Color")
    }

    return(
        <div class="cgcontainer pt-3" style={{backgroundColor:backgroundColor}}>

        <div class="d-flex flex-row justify-content-center gap-2">
            <button class="btn btn-light buttons pb-2" onClick={changeToRGB}>Create RGB Color</button>
            <button class="btn btn-light buttons pb-2" onClick={changeToHEX}>Create HEX Color</button>
            <button class="btn btn-light buttons pb-2" onClick={ colorValue === "HEX Color" ? changeToHEX : changeToRGB}>Generate Random Color</button>
        </div>

        <div class="d-flex flex-column align-items-center mt-5">
            <p class="text-light mt-5 display-6">{colorValue}</p>
            <p class="text-light mt-3 display-3">{backgroundColor}</p>
        </div>

        </div>
    )
}

export default Colorgenerator;