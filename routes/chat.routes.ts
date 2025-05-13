import {Router} from 'express';
import multer from 'multer';
import { chatImport } from '../controllers/chat.controller';

const upload = multer({dest: '/uploads'});
const router = Router();

router.post('/import-file', upload.single('file'), chatImport);

export default router;

