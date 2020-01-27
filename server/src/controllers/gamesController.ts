import {Request, Response} from 'express';

import pooldb from '../database';

class GamesController {
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pooldb.query('UPDATE products set ? WHERE id = ?', [ req.body, id]);
        console.log(req.body);
        res.json({message: 'The Game updated'});
        
    }
    
    public async list(req: Request, res: Response): Promise<void> {
        const products = await pooldb.query('SELECT * FROM products');
        res.json(products);
        
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const products = await pooldb.query('SELECT * FROM products WHERE id = ?', [id]);
        if(products.length > 0){
            return res.json(products[0]);
        }
        res.status(404).json({text: "The product daesn't exists"});
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pooldb.query('INSERT INTO products set ?', [req.body]);
        console.log(req.body);
        res.json({message: ' Gave saved'});
        
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pooldb.query('DELETE FROM products WHERE id = ?', [id]);
        console.log(req.body);
        res.json({message: 'The Game deleted'});
        
    }
}
const gamesController = new GamesController();
export default gamesController;