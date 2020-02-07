'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
        //Chave primária de identificação de registro
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        //Coluna que armazena o nome do usuário
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //Coluna que armazena o email do usuário
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        //Coluna que armazena o hash da senha do usuário
        password_hash: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //Que tipo de usuário
        provider: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        //Timestamps da tabela
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
