import { combineReducers } from "redux";
import main from "./main";
import home from "./home";
import federations from "./federations";
import gymsclubs from "./gymsclubs";
import competitions from "./competitions";
import { newsDetails } from "./newsDetails";
import shop from "./shop";
import { healthcare } from "./healthcare";

const rootReducer = combineReducers({
  main,
  home,
  federations,
  gymsclubs,
  healthcare,
  shop,
  competitions,
  newsDetails,
});

export default rootReducer;
