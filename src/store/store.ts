import { configureStore } from '@reduxjs/toolkit';
import filtersSliceReducer from './slices/filtersSlice';

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: {
            filters: filtersSliceReducer,
        },
        preloadedState: initialState,
    });
};

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
