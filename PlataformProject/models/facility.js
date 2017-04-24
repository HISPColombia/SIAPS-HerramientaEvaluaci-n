/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility', {
    faoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tfoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'typefacility',
        key: 'tfoid'
      }
    }
  }, {
    tableName: 'facility'
  });
};
