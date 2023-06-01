module.exports = (DataTypes, sequelize) => {
    const tableName = 'tasks';
    const tasks = sequelize.define('tasks', {
         id: {
             type: DataTypes.STRING(36),
             primaryKey: true,
             defaultValue: DataTypes.UUIDV4,
         },
         value: {
             type: DataTypes.STRING(999),
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
 
    return tasks;
 }