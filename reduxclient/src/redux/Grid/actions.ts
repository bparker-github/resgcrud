import { ActionType, LoanType, BorrowerType } from './../../constants/types';

import { 
    LOAN_INDEXCHANGED,
    LOAN_CLEARSELECTED,
    BORROWER_INDEXCHANGED,
    BORROWER_CLEARSELECTED,
    INFO_INDEXCHANGED,
    INFO_CLEARSELECTED,
    INFO_LOANMODIFIED,
    INFO_LOANADDED,
    LOADED_LOANS,
    LOADED_BORROWERS,
} from './constants';

export function loanIndexChanged(payload: LoanType): ActionType<LoanType> {
    return { payload, type: LOAN_INDEXCHANGED };
}
export function loanClearSelected() { return { type: LOAN_CLEARSELECTED }; }

export function borrowerIndexChanged(payload: BorrowerType): ActionType<BorrowerType> {
    return { payload, type: BORROWER_INDEXCHANGED };
}
export function borrowerClearSelected() { return { type: BORROWER_CLEARSELECTED }; }

export function infoIndexChanged(payload: LoanType): ActionType<LoanType> {
    return { payload, type: INFO_INDEXCHANGED };
}
export function infoClearSelected() { return { type: INFO_CLEARSELECTED }; }
export function infoLoanAdded(payload: LoanType): ActionType<LoanType> {
    return { payload, type: INFO_LOANADDED };
}
export function infoLoanModified(payload: LoanType): ActionType<LoanType> {
    return { payload, type: INFO_LOANMODIFIED };
}

export function loadedLoans(payload: LoanType[]): ActionType<LoanType[]> {
    return { payload, type: LOADED_LOANS };
}
export function loadedBorrowers(payload: BorrowerType[]): ActionType<BorrowerType[]> {
    return { payload, type: LOADED_BORROWERS };
}