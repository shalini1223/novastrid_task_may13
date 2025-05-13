import {DataTypes} from 'sequelize';
import sequelize from '../config/db';

const Chat = sequelize.define('Chat',{
    message: {
        type: DataTypes.STRING
    },
    sender: {
        type: DataTypes.STRING
    }
});

export default Chat;