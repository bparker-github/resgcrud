import { RootStateType } from '../constants/types';
import { combineReducers, Reducer } from 'redux';
import gridReducer from './Grid';

export function createReducer(): Reducer<RootStateType> {
    return combineReducers({
        Grid: gridReducer
    });
}