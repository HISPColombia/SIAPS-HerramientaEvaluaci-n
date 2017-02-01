/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teamproject', {
    tpoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    proid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    },
    rooid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'role',
        key: 'rooid'
      }
    },
    usoid: {
      type: 'NUMERIC',
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
