/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typequestion', {
    tqoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tqdescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tqstate: {
      type: 'NUMERIC',
      allowNull: false
    }
  }, {
    tableName: 'typequestion'
  });
};
