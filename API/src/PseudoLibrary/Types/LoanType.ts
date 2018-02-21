import BorrowerType from './BorrowerType';

export default class LoanType {
    id: number;
    name: string;
    borrower: BorrowerType;
    amount: number;
    currency: string;
    estClose: Date;
};