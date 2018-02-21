import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as cors from 'cors';

import { Server } from 'typescript-rest';

import controllers from './../Controllers';
import DbHandler from '../Database/DbHandler';

export default class APIServer {
    private app: express.Application;
    private server: http.Server = null;
    public PORT: number = +process.env.port || 8080;

    /**
     * Creates an instance of Server.
     * @memberof Server
     */
    constructor() {
        this.app = express();
        this.config();
        
        Server.buildServices(this.app, ...controllers);
    }

    /**
     * Configure the current server.
     * 
     * @private
     * @memberof Server
     */
    private config() {
        this.app.use(express.static(path.join(__dirname, 'Client'), { maxAge: 31557600000 }));
        this.app.use(cors());
    }

    private async initialize(recreate: boolean): Promise<any> {
        await DbHandler.Initialize(recreate);
    }

    /**
     * Starts the server and saves the instance.
     * 
     * @param {(error: any) => void} errorHandle The function to handle errors on starting.
     * @memberof Server
     */
    public async start(errorHandle: (error: any) => void) {
        await this.initialize(false);
        this.server = this.app.listen(this.PORT, (err: any) => {
            if (err) {
                errorHandle(err);
                return;
            }

            console.log(`Server is running on ${this.server.address().address}:${this.server.address().port}!`);
        });
    }

    /**
     * Stops the server (if running).
     * 
     * @memberof Server
     */
    public async stop() {
        if (this.server) {
            await this.server.close();
        }
    }
}