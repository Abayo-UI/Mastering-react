import './styles-9.css';
import { useState } from 'react';

const Tabs = () => {
    const [ clicked,setClicked ] = useState(false);
    const [ tabValue, setTabValue ] = useState("");

    function handleClick(e){
      const string = e.target.textContent;
      // coonsole.log(e.target.textContent)

      const tabNumber = string.split(' ')[1]
      setTabValue(tabNumber);
      setClicked(true);
    }

  return (
    <div className="container">
       <div className="tabs-container mb-2"> 
         <button className={ tabValue === "1" && clicked ? "p-2 btn btn-danger rounded-3" :"p-2 btn btn-success rounded-3"} onClick={(e) => handleClick(e)}>Tab 1</button>
         <button className={ tabValue === "2" && clicked ? "p-2 btn btn-danger rounded-3" :"p-2 btn btn-success rounded-3"} onClick={(e) => handleClick(e)}>Tab 2</button>
         <button className={ tabValue === "3" && clicked ? "p-2 btn btn-danger rounded-3" :"p-2 btn btn-success rounded-3"} onClick={(e) => handleClick(e)}>Tab 3</button>
        </div>

        <div className="text-container">
        { tabValue === "1" && <p className="fs-3 text-danger">This is content is for Tab 1</p> }
        { tabValue === "2" && <p className="fs-3 text-danger">Content for tab 2.</p> }
        { tabValue === "3" && <p className="fs-3 text-danger">Some random content.</p> }
        </div>
    </div>
  )
}
export default Tabs