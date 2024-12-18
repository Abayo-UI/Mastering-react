import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa" 

export default function MenuItem({item}){

     const [ child, setChild ] = useState(false);

     function handleClick(){
      setChild(!child);
      console.log(child);
     }

    return(
        <div>

           <div onClick={handleClick} class="d-flex h-25 ps-1 pe-2 flex-row justify-content-between align-items-center cursor">          
           <p>{item.label}</p>
           {
           ( item && item.children ) 
           ? child ? <FaMinus size={10} style={{marginTop:"-10px"}}/> : <FaPlus size={10} style={{marginTop:"-10px"}}/>
           : null
           }
           </div>

           {
           (child && item && item.children ) && item.children.map( childItem => 
           <div class="ms-2"> 
           <MenuItem item={childItem}/> 
           </div>
           )
           }

        </div>
          
    )
}