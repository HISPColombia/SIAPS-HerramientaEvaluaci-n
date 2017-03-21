/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('method', {
    mtoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mtname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mtdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'method'
  });
};
