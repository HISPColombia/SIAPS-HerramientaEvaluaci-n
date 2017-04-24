/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('variable', {
    vaoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'metric',
        key: 'meoid'
      }
    },
    vaname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vatypevalue: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'variable'
  });
};
