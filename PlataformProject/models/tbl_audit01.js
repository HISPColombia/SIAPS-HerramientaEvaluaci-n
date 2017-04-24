/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_audit01', {
    pk_audit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TableName: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    Operation: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    OldValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NewValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UpdateDate: {
      type: DataTypes.TIME,
      allowNull: true
    },
    UserName: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'tbl_audit01'
  });
};
