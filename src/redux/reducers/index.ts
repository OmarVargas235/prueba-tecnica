import { combineReducers } from 'redux';

import reducerBlockUI from './reducerBlockUI';
import alert from './reducerAlert';
import theme from './reducerTheme';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    alert,
    theme,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;