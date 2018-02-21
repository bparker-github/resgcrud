import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Loan } from './Loan';

// This is hideous. We'll figure out Typescript shared library later.
import { BorrowerType, LoanType } from './../PseudoLibrary';


@Entity()
export class Borrower extends BorrowerType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @OneToMany(type => Loan, photo => photo.borrower)
    loans: LoanType[];

    constructor(name?: string) {
        super();
        this.name = name;
    }
}