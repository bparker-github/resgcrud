import LoanType from './LoanType';

export default class BorrowerType {
    id: number;
    name: string;
    loans?: LoanType[];
}