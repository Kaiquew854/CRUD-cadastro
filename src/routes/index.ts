import {Router} from 'express';
import * as usrController from '../controllers/UserController';

const router = Router();

//pagina home
router.get('/', usrController.home);

//pagina criar
router.post('/novoUsuario', usrController.criar)

//pagina editar
router.post('/editar', usrController.editar)

//pagina excluir
router.get('/excluir/:identf', usrController.excluir)


export default router;