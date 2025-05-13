import {DataTypes} from 'sequelize';
import sequelize from '../config/db';

const User = sequelize.define('User',{
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password: {
        type: DataTypes.STRING
    }
});

export default User;