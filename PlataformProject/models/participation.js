/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participation', {
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faoid: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    phoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'PHCPhase',
        key: 'phoid'
      }
    }
  }, {
    tableName: 'participation'
  });
};
