/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PHCPhase', {
    phoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phcDescription: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'PHCPhase'
  });
};
