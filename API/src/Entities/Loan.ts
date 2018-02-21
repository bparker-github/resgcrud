import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Borrower } from './Borrower';

// This is hideous. We'll figure out Typescript shared library later.
import { LoanType, BorrowerType } from './../PseudoLibrary';

@Entity()
export class Loan extends LoanType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @ManyToOne(type => Borrower, borrower => borrower.loans)
    borrower: BorrowerType;
    
    @Column('int')
    amount: number;

    @Column({ length: 3})
    currency: string;

    @Column({ type: 'datetime', default: null })
    estClose: Date;

    constructor(name: string, amt: number, curr: string = 'USD') {
        super();
        this.name = name;
        this.amount = amt;
        this.currency = curr;
    }
}