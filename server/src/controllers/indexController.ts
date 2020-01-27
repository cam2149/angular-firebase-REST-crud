import {Request, Response} from 'express';

class IndexController {
    index (req: Request, res: Response) {
        res.json({text: 'APIRest is /api/games'})
    }
}
export const indexController = new IndexController();