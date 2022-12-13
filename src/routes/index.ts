import {Router} from 'express';
import * as usrController from '../controllers/UserController';

const router = Router();

//pagina home
router.get('/', usrController.home);








//pagina editar
router.get('/editar', (req, res)=>{
    res.send('pagina editar')
})

//pagina excluir
router.get('/excluir', (req, res)=>{
    res.send('pagina excluir')
})


export default router;