import { configureStore, combineReducers } from '@reduxjs/toolkit';

import * as fromAuth from './reducers/auth';

const rootReducer = combineReducers({
	user: fromAuth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: rootReducer,
});
