/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participation', {
    ptoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    },
    faoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'facility',
        key: 'faoid'
      }
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