import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db';
import userRoute from './routes/user.routes';
import chatRoute from './routes/chat.routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRoute);
app.use('/api/v1/chat', chatRoute);

sequelize.sync({alter: true}).then(() =>{
    console.log('Database connected');
});

export default app;