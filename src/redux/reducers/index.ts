import { combineReducers } from "redux";
import main from "./main";
import home from "./home";
import federations from "./federations";

const rootReducer = combineReducers({ main, home, federations });

export default rootReducer;
