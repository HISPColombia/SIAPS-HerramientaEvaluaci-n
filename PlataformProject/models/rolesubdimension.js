/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolesubdimension', {
    rsoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'subdimension',
        key: 'suoid'
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
    tableName: 'rolesubdimension'
  });
};
