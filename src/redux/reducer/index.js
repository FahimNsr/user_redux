import { combineReducers } from 'redux';

import { alert } from './alertReducer';
import { registration } from './registerReducer';
import { authentication } from './authReducer';

const rootReducer = combineReducers({
    registration,
    authentication,
    alert,
});

export default rootReducer;