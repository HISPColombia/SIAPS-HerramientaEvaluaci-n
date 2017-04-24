/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    rooid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rodescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roinitials: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'role'
  });
};
