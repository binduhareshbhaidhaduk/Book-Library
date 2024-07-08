import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";




const RootReducer = combineReducers({
    // Add your reducers here
    adminReducer,
  

})

export default RootReducer;
