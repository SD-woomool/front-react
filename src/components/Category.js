import {ReactComponent as Subway} from "../assets/subway.svg";
import {ReactComponent as Etc} from "../assets/etc.svg";
import {ReactComponent as Cafe} from "../assets/cafe.svg";
import {ReactComponent as Food} from "../assets/food.svg";
import {ReactComponent as Place} from "../assets/place.svg";

function Category( {category, ...props} ) {
  switch(category) {
    case "SW8":
      return <Subway {...props} />;
    case "CE7":
      return <Cafe {...props} />;
    case "FD6":
      return <Food {...props} />;
    case "AT4":
      return <Place {...props} />;
    default:
      return <Etc {...props} />;
  }
}

export default Category;