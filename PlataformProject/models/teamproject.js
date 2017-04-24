/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teamproject', {
    tpoid: {
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
    rooid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'role',
        key: 'rooid'
      }
    },
    usoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    }
  }, {
    tableName: 'teamproject'
  });
};
