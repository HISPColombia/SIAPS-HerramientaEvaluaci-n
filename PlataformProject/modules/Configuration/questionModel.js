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
    mtoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'method',
        key: 'mtoid'
      }
    },
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'metric',
        key: 'meoid'
      }
    },
    tqoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'typequestion',
        key: 'tqoid'
      }
    },
    optionquestion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reqsystem: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'question'
  });
};
