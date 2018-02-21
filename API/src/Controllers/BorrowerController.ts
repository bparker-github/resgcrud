import { Path, PathParam, FormParam, POST, GET } from 'typescript-rest';
import { Borrower } from '../Entities/Borrower';
import DbHandler from '../Database/DbHandler';

@Path('/borrower')
export default class BorrowerController {

    @GET
    async listAllBorrowers(): Promise<Borrower[]> {
        return await DbHandler.GetAllBorrowers();
    }

    @Path('/init')
    @GET
    async ensureTableHasEntries(): Promise<void> {
        if (!await DbHandler.GetBorrowerById(1)){
            let borr1 = new Borrower('Borris');
            await DbHandler.SaveBorrower(borr1);
        }

        if (!await DbHandler.GetBorrowerById(2)) {
            let borr2 = new Borrower('Gladys');
            await DbHandler.SaveBorrower(borr2);
        }
    }

    @Path('/get/:id')
    @GET
    async getBorrowerById(@PathParam('id') id: number): Promise<Borrower> {
        return DbHandler.GetBorrowerById(id);
    }

    @Path('/save')
    @POST
    async saveBorrower(@FormParam('borrower') borrower: Borrower): Promise<Borrower> {
        return DbHandler.SaveBorrower(borrower);
    }
}