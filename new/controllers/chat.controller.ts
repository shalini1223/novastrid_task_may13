import {Request, Response } from 'express';
import { importChatMessage } from '../utils/excel.utils';

export const chatImport = async (req: Request, res: Response) =>{
    try{
await importChatMessage(req.file.path);
res.json({message:'File import sucessfully'});
    }catch(err){
        console.log('Errorrr', err);
    }
};