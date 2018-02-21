import { Path, PathParam, FormParam, POST, GET } from 'typescript-rest';
import { Loan } from '../Entities/Loan';
import DbHandler from '../Database/DbHandler';
import { LoanType } from './../PseudoLibrary';

@Path('/loan')
export default class LoanController {

    @GET
    async listAllBorrowers(): Promise<Loan[]> {
        let loans = await DbHandler.GetAllLoans();
        return loans;
    }

    @Path('/init')
    @GET
    async ensureTableHasEntries(): Promise<void> {
        let borr1 = await DbHandler.GetBorrowerById(1);
        let borr2 = await DbHandler.GetBorrowerById(2);

        if (!await DbHandler.GetLoanById(1)) {
            let loan1 = new Loan('A very large teddy bear', 234999);
            loan1.borrower = borr1;
            await DbHandler.SaveLoan(loan1);
        }

        if (!await DbHandler.GetLoanById(2)) {
            let loan2 = new Loan('Tokyo Vacation', 439289);
            loan2.borrower = borr2;
            await DbHandler.SaveLoan(loan2);
        }

        if (!await DbHandler.GetLoanById(3)) {
            let loan3 = new Loan('A singular Beetle', 350000000);
            loan3.borrower = borr2;
            await DbHandler.SaveLoan(loan3);
        }
    }

    @Path('/get/:id')
    @GET
    async getLoanById(@PathParam('id') id: number): Promise<Loan> {
        return DbHandler.GetLoanById(id);
    }

    @Path('/save')
    @POST
    async putLoanInDb(loan: Loan): Promise<Loan> {
        return DbHandler.SaveLoan(loan);
    }
}