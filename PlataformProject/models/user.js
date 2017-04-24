/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    usoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uspassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'person',
        key: 'peoid'
      }
    },
    usstatus: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ustoken: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
