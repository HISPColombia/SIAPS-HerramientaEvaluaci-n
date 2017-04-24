/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prdateend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      references: {
        model: 'methodology',
        key: 'meoid'
      }
    }
  }, {
    tableName: 'project'
  });
};
