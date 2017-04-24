/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userrole', {
    uroid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    },
    rooid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'role',
        key: 'rooid'
      }
    }
  }, {
    tableName: 'userrole'
  });
};
