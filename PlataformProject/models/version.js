/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version', {
    veoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    venumber: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'version'
  });
};
