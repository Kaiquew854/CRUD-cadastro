import {Response, Request } from 'express';

export const home = (req: Request, res: Response)=>{
    res.render('pages/home');
}