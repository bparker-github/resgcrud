import { Store, createStore } from 'redux';
import { RootStateType } from '../constants/types';
import { initialState } from '../redux/Grid';
import { createReducer } from './reducers';

export function configureStore(): Store<RootStateType> {
    const store = createStore<RootStateType>(
        createReducer(), { Grid: initialState }
    );
    return store;
}