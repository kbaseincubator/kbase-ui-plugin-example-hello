import { Action, Reducer } from 'redux';
// import { baseReducer } from "@kbase/ui-lib";
// import { BaseStoreState } from "@kbase/ui-lib";

import baseReducer from '../kbaseUI/redux/reducers';
import { BaseStoreState } from '../kbaseUI/redux/store';

import { StoreState } from './store';

const reducer: Reducer<StoreState | undefined, Action> = (state: StoreState | undefined, action: Action) => {
    const baseState = baseReducer(state as BaseStoreState, action);
    if (baseState) {
        return baseState as StoreState;
    }
    return state;
};

export default reducer;
