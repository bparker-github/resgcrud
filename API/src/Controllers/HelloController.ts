import { Path, PathParam, GET } from 'typescript-rest';

@Path('/hello')
export default class HelloController {

    @Path(':name')
    @GET
    sayHello(@PathParam('name') name: string): string {
        return `Hello ${name}`;
    }
}