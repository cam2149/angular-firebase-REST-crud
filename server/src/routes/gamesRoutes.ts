import { Router } from 'express';

import  gamesController from '../controllers/gamesController';

class GameRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', gamesController.list );
        this.router.get('/:id', gamesController.getOne );
        this.router.put('/:id', gamesController.update );
        this.router.post('/', gamesController.create );
        this.router.delete('/:id', gamesController.delete );
    }
}

const gamesRoutes = new GameRoutes();
export default gamesRoutes.router;