/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typefacility', {
    tfoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tfname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'typefacility'
  });
};
