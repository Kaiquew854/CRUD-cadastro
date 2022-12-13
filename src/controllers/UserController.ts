import {Response, Request } from 'express';
import { UserTb } from '../models/database/UsersTable'

export const home = async (req: Request, res: Response)=>{

    let userList = await UserTb.findAll();

    res.render('pages/home', {
        userList
    });
}