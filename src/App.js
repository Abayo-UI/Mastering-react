import Accordion  from "./Components/Accordion";
import ImageSlider from "./Components/Image-Slider";
import LoadMoreButton from "./Components/Load-More-Button";
import Colorgenerator from "./Components/Random-Color-Generator";
import StarRating from "./Components/Star-Rating";
import Treeview from "./Components/Tree-view";
import data from "./Components/Tree-view/data";
 
function App() {
  return (
    <div>
      <Accordion/>
      <Treeview menus={data}/>
      <Colorgenerator/>
      <StarRating/>
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="3"/>
      <LoadMoreButton url="https://dummyjson.com/products"/>
      
    </div>
  );
}

export default App;
