import {Router, Response, Request } from 'express';

const router = Router();

//pagina home
router.get('/', (req: Request, res: Response)=>{
    res.render("pages/home");
});

//pagina editar
router.get('/editar', (req: Request, res: Response)=>{
    res.send('pagina editar')
})

//pagina excluir
router.get('/excluir', (req, res)=>{
    res.send('pagina excluir')
})


export default router;