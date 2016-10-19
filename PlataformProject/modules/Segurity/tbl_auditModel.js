/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_audit', {
    pk_audit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TableName: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Operation: {
      type: DataTypes.CHAR,
      allowNull: false
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
      allowNull: false
    },
    UserName: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'tbl_audit'
  });
};
