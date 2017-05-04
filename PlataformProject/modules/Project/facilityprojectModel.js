/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facilityproject', {
    facproid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'facility',
        key: 'faoid'
      }
    },
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    }
  }, {
    tableName: 'facilityproject'
  });
};
