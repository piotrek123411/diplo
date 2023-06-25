module.exports = (DataTypes, sequelize) => {
    const tableName = 'answers';
    const answers = sequelize.define('answers', {
         id: {
             type: DataTypes.STRING(36),
             primaryKey: true,
             defaultValue: DataTypes.UUIDV4,
         },
         value: {
             type: DataTypes.STRING(2000),
             allowNull: false
         },
         task_id: {
            type: DataTypes.STRING(36),
            secondaryKey: true
         },
         user_id: {
            type: DataTypes.STRING(36),
            secondaryKey: true
         },
         mark: {
            type: DataTypes.STRING(11),
            defaultValue: 'Не оценено.'
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
 
    return answers;
 }