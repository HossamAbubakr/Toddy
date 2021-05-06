// -----> REFACTORING STEPS <----- \\

import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";
// [1] import your middleware and export them using the applyMiddleware method.
export default applyMiddleware(thunk, logger);
