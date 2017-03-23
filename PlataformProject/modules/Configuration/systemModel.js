/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system', {
    sysoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sysName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    initials: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'system'
  });
};
