import { multiply, add } from "./calculator.js"; // we import exported method
import user, {getFullInfoPretty} from "./userInfo.js";  // this import will be default, when sb didn't ask for anything specific we will import this one ;p
const paragraph = document.getElementById("multi");
paragraph.innerText = multiply(2,3);
console.log(add(2,3));
console.log(user);
console.log(getFullInfoPretty());
