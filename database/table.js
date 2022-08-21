import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('console', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 20,
        min: 0,
        acquire: 1200000,
        idle: 10000
    }
});

const Usuario = sequelize.define('usuario', {
    user: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, { freezeTableName: true });


const Funcionario = sequelize.define('funcionario', {
    user: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, { freezeTableName: true });

sequelize.sync().then({alter: true})
sequelize.authenticate().then()

export { Usuario, Funcionario }