import 'reflect-metadata';

import { createConnection, ConnectionOptions, Repository } from 'typeorm';
import { Loan } from './../Entities/Loan';
import { Borrower } from './../Entities/Borrower';
import { Money, Currencies, Currency } from 'ts-money';

import { LoanType, BorrowerType } from './../PseudoLibrary';

export const DatabasePath:string = './src/Database/ThatGoodGood.db';
export const ConnectionConfig: ConnectionOptions = {
    type: 'sqlite',
    database: DatabasePath,
    entities: [
        Borrower,
        Loan
    ]
};


export default class DbHandler {
    public static loanRepo: Repository<Loan>;
    public static borrowRepo: Repository<Borrower>;

    /**
     * Attempts to initialize the database components required for use.
     * @param sync A value indicating whether to synchronize the database with the entities laid out in code.
     * @returns {any} Returns an error value if the initialization failed, otherwise nothing.
     */
    public static async Initialize(sync: boolean = true): Promise<any> {
        try {
            let connConfig = Object.assign(ConnectionConfig, (sync ? { synchronize: true } : {}));
            let connection = await createConnection(connConfig);

            DbHandler.loanRepo = connection.getRepository(Loan);
            DbHandler.borrowRepo = connection.getRepository(Borrower);
        }
        catch (error) {
            console.log(`Failed to initialize DbHandler: ${error}`);
            return error;
        }
    }

    /************ Borrower Methods. ************/

    public static async GetAllBorrowers(): Promise<Borrower[]> {
        return DbHandler.borrowRepo.find({ relations: ["loans"]});
    }

    public static async GetBorrowerById(id: number): Promise<Borrower> {
        return DbHandler.borrowRepo.findOneById(id, { relations: ["loans"] });
    }
    
    public static async SaveBorrower(borrower: Borrower): Promise<Borrower> {
        return DbHandler.borrowRepo.save(borrower);
    }

    /************** Loan Methods. **************/
    public static async GetAllLoans(): Promise<Loan[]> {
        return DbHandler.loanRepo.find({relations: ["borrower"] });
    }

    public static async GetLoanById(id: number): Promise<Loan> {
        return DbHandler.loanRepo.findOneById(id, { relations: ["borrower"] });
    }

    public static async SaveLoan(loan: Loan): Promise<LoanType> {
        return DbHandler.loanRepo.save(loan);
    }
}