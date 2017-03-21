/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    quoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qucode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ququestion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'metric',
        key: 'meoid'
      }
    },
    suoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'subdimension',
        key: 'suoid'
      }
    },
    optionquestion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'question'
  });
};
