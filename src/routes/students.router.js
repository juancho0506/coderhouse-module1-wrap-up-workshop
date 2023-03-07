import { Router } from 'express';
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
import StudentService from '../services/filesystem/students.service.js';

const router = Router();
const studentService = new StudentService();

router.get('/',async(req,res)=>{
    //TODO: Resolver esta ruta GET para poder sacar de la persistencia los estudiantes.
})

router.post('/',async(req,res)=>{
    //TODO: Resolver esta ruta POST para poder guardar en la persistencia los estudiantes.
})

export default router;