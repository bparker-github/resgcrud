export interface LoanType {
    id?: number;
    name: string;
    borrower: BorrowerType;
    amount: number;
    currnecy: string;
    estClose?: Date;
}

export interface BorrowerType {
    id?: number;
    name: string;
    loans?: LoanType[];
}

export interface GridState {
    AllBorrowers: BorrowerType[];
    AllLoans: LoanType[];
    SelectedBorrower: (BorrowerType | null);
    SelectedInfo: (LoanType | null);
    SelectedLoan: (LoanType | null);
}
export type GridStateType = GridState;

export interface RootState {
    Grid: GridState;
}
export type RootStateType = RootState;

interface Action<T> {
    type: string;
    payload?: T;
}
export type ActionType<T> = Action<T>;