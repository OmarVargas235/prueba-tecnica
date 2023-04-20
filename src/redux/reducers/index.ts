import { combineReducers } from 'redux';

import reducerBlockUI from './reducerBlockUI';
import alert from './reducerAlert';
import theme from './reducerTheme';
import utilsRedux from './reducerUtils';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    alert,
    theme,
    utilsRedux,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;