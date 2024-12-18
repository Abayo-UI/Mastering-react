import MenuItem from "./menu-item";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuList({ list = []}){
    return(
        <div>
          {
            list && list.length 
            ? list.map( listItem => <MenuItem item={listItem}/>)
            : null
          }
        </div>
    )
}    

export default MenuList;