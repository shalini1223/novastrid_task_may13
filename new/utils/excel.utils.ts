import * as XLSX from 'xlsx';
import Chat from '../modules/chat.model';

export const importChatMessage = async (filePath: string) => {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data=XLSX.utils.sheet_to_json(sheet);
    
    for(const item of data){
        await Chat.create({
            message: item['Message'],
            sender: item['Sender']
        });
    }
};