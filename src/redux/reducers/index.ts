import { combineReducers } from "redux";
import main from "./main";
import home from "./home";
import federations from "./federations";
import { newsDetails } from "./newsDetails";

const rootReducer = combineReducers({ main, home, federations, newsDetails });

export default rootReducer;
