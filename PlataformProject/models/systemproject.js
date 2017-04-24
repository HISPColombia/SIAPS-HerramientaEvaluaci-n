/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('systemproject', {
    sysproid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sysoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'system',
        key: 'sysoid'
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
    tableName: 'systemproject'
  });
};
