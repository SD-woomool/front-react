import {ReactComponent as Subway} from "../assets/subway.svg";
import {ReactComponent as Place} from "../assets/place.svg";

function Category( {category, ...props} ) {
  // switch 문으로 바꿔보기
  if (category === "SW8") {
    return <Subway {...props} />
  } else {
    return <Place {...props} />
  }
}

export default Category;