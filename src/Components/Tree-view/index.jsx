import MenuList from "./menu-list";
import "./styles-5.css";

export default function Treeview({menus = []}){
    return(
        <div class="tree-view-container menu-list-container col-lg-2 col-4 fs-6">
            <MenuList list={menus}/>
        </div>
    )
}