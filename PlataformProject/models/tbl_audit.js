/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_audit', {
    pk_audit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tablename: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    operation: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    oldvalue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newvalue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updatedate: {
      type: DataTypes.TIME,
      allowNull: false
    },
    username: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'tbl_audit'
  });
};
