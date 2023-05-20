module.exports = (DataTypes, sequelize) => {
    const tableName = 'roles';
    const roles = sequelize.define('roles', {
         id: {
             type: DataTypes.STRING(36),
             primaryKey: true,
             defaultValue: DataTypes.UUIDV4,
         },
         name: {
             type: DataTypes.STRING(150),
             allowNull: false
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
 
    return roles;
 }