import { combineReducers } from "redux";
import main from "./main";
import home from "./home";
import federations from "./federations";
import competitions from "./competitions";
import { newsDetails } from "./newsDetails";

const rootReducer = combineReducers({
  main,
  home,
  federations,
  competitions,
  newsDetails,
});

export default rootReducer;
