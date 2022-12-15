import { Response, Request } from 'express';
import { NumericLiteral } from 'typescript';
import { UserTb } from '../models/database/UsersTable'

export const home = async (req: Request, res: Response) => {
    let userList = await UserTb.findAll();
    res.render('pages/home', {
        userList
    });
}

export const criar = async (req: Request, res: Response) => {
    let usrName: string = req.body.Nnome as string;
    let usrAge: number = parseInt(req.body.Nidade as string);

    if (req.body.Nidade && req.body.Nnome) {
        await UserTb.create({
            name: usrName,
            age: usrAge
        })
    } else {
        if (req.body.Nnome) {
            await UserTb.create({
                name: usrName
            })
        }
    }
    res.redirect('/');
}

export const editar = async (req: Request, res: Response) => {
    let novaIdade: number = parseInt(req.body.Nidade as string);
    let identificacao: number = parseInt(req.body.identf as string)
    let novoNome: string = req.body.Nnome as string;

    if (req.body.Nnome) {
        await UserTb.update({ name: novoNome }, { where: { id: identificacao } })
    }
    if (req.body.Nidade) {
        await UserTb.update({ age: novaIdade }, { where: { id: identificacao } })
    }

    res.redirect('/');
}

export const excluir = async (req: Request, res: Response) => {
    let idToDelete: number = parseInt(req.params.identf as string);
    if (req.params.identf) {
        await UserTb.destroy({ where: { id: idToDelete } });
    }
    res.redirect('/');
}