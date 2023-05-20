module.exports = (DataTypes, sequelize) => {
    const tableName = 'users';
    const users = sequelize.define('users', {
         id: {
             type: DataTypes.STRING(36),
             primaryKey: true,
             defaultValue: DataTypes.UUIDV4,
         },
         login: {
             type: DataTypes.STRING(24),
             allowNull: false
         },
         password: {
             type: DataTypes.STRING(150),
             allowNull: false
         },
         role_id: {
            type: DataTypes.STRING(36),
            primaryKey: true,
         },
         createdAt: {
             type: DataTypes.DATE,
             defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
         },
         updatedAt: {
             type: DataTypes.DATE,
             defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
         }
    }, { tableName });
 
    return users;
 }