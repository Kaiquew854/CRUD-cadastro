import { Model, DataTypes } from "sequelize";
import db from './db'

interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = db.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,

        set(valor: number) {
            console.log(valor)
            if (valor < 18) {
                valor = 18;
            }
            this.setDataValue('age', valor)
        }
    }
}, {
    tableName: 'users',
    timestamps: false
})