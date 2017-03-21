/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subdimension', {
    suoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dioid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'dimension',
        key: 'dioid'
      }
    }
  }, {
    tableName: 'subdimension'
  });
};
