import * as Immutable from 'seamless-immutable';
import { GridStateType, ActionType, LoanType, BorrowerType } from '../../constants/types';
import {
    LOAN_INDEXCHANGED,
    LOAN_CLEARSELECTED,
    BORROWER_INDEXCHANGED,
    BORROWER_CLEARSELECTED,
    INFO_INDEXCHANGED,
    INFO_CLEARSELECTED,
    LOADED_LOANS,
    LOADED_BORROWERS
} from './constants';

// tslint:disable:max-line-length
const fakeBorrower = {id: 0, name: 'Billy Bob Thorton' } as BorrowerType;
const fakeLoan = {id: 1, name: 'test', amount: 10023912, currnecy: 'USD', estClose: new Date(), borrower: fakeBorrower} as LoanType;
const istate: GridStateType = {
    AllBorrowers: [fakeBorrower],
    AllLoans: [fakeLoan],
    SelectedBorrower: null,
    SelectedLoan: null,
    SelectedInfo: null
};

export const initialState = Immutable.from(istate);

const gridReducer = (state = initialState, action: ActionType<{}>): GridStateType => {
    switch (action.type) {
        case LOAN_INDEXCHANGED:
            return state.set('SelectedLoan', action.payload);
        case LOAN_CLEARSELECTED:
            return state.set('SelectedLoan', null);
        case BORROWER_INDEXCHANGED:
            return state.set('SelectedBorrower', action.payload);
        case BORROWER_CLEARSELECTED:
            return state.set('SelectedBorrower', null);
        case INFO_INDEXCHANGED:
            return state.set('SelectedInfo', action.payload);
        case INFO_CLEARSELECTED:
            return state.set('SelectedInfo', null);
        case LOADED_LOANS:
            return state.set('AllLoans', action.payload);
        case LOADED_BORROWERS:
            return state.set('AllBorrowers', action.payload);
        default:
            return state;
    }
};

export default gridReducer;