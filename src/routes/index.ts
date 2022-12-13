import {Router } from 'express';

const router = Router();

//pagina home
router.get('/', (req, res)=>{
    res.send('pagina inicial')
})

//pagina editar
router.get('/editar', (req, res)=>{
    res.send('pagina editar')
})

//pagina excluir
router.get('/excluir', (req, res)=>{
    res.send('pagina excluir')
})


export default router;