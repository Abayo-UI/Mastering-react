import Accordion  from "./Components/Accordion";
import ImageSlider from "./Components/Image-Slider";
import Colorgenerator from "./Components/Random-Color-Generator";
import StarRating from "./Components/Star-Rating";
 
function App() {
  return (
    <div>
      <Accordion/>
      <Colorgenerator/>
      <StarRating/>
      <ImageSlider url="https://picsum.photos/v2/list" limit="10" page="3"/>
    </div>
  );
}

export default App;
