import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";

import rootReducer from "../reducer";

// const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware,
            // loggerMiddleware
            ),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
