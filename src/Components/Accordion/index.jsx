import { useState } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Accordion(){

      const accordionStyles = {
        backgroundColor: "#614101",
        zIndex: 3,
        cursor: "pointer"
      }

      const buttonStyles = {
        backgroundColor: "#614101",
        color: "#fff",
        marginTop: "9px",
        borderRadius: "10px",
        padding: "3px"
      }

      const answersStyles = {
        backgroundColor: "#614101",
        marginTop:"-13px",
        color: "#fff",
        fontSize: "0.8rem",
        padding: "0 7px 12px 7px",
        borderRadius: "0 0 10PX 10PX",
        cursor: "pointer"
      }

      const [ plustoggler, setPlusToggler ] = useState(null);
      const [ multiselection, setMultiSelection ] = useState(false);
      const [ multipleArray, setMultipleArray ] = useState([]);

      function handleSingleSelection(accordionNumber){
        setPlusToggler( accordionNumber === plustoggler ? null : accordionNumber );
      }

      function handleMultiselection(accordionNumber){
        const copyOfMultiple = [...multipleArray];
        let indexOfElement = copyOfMultiple.indexOf(accordionNumber)

        if( indexOfElement === -1 ){
            copyOfMultiple.push(accordionNumber);
            // coonsole.log(copyOfMultiple);
        }
        else{
            copyOfMultiple.splice(indexOfElement,1);
            // coonsole.log(copyOfMultiple);
       }
       setMultipleArray(copyOfMultiple);
      }

    return(
        <body class="d-flex flex-column justify-content-start align-items-center">
            <button style={buttonStyles} onClick={ () => setMultiSelection(!multiselection)}> Enable MultiSelection </button>
          <div class="mt-3 col-lg-8 col-11">
            
            { data.map( dataItem =>
                <div>
                <div style={accordionStyles} class="mb-2 py-2 px-2 text-light rounded-3  fs-6 d-flex flex-row justify-content-between"
                onClick={ multiselection 
                ? () => handleMultiselection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)}> 
                {dataItem.question}
                <div> + </div>
                </div>
                { multiselection
                ? multipleArray.indexOf(dataItem.id) !== -1 ? <p style={answersStyles}>{dataItem.answer}</p> : null
                : plustoggler === dataItem.id  && <p style={answersStyles}>{dataItem.answer}</p>}
                </div>
            )}
          </div>
        </body>
    )
}