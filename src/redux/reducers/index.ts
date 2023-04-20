import { combineReducers } from 'redux';

import reducerBlockUI from './reducerBlockUI';
import alert from './reducerAlert';
import theme from './reducerTheme';
import utilsRedux from './reducerUtils';
import products from './reducerProduct';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    alert,
    theme,
    utilsRedux,
    products
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;