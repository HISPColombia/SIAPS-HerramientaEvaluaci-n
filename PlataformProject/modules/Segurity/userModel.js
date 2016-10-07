/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    usoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usname: {
      type: DataTypes.STRING,
      unique:'compositeIndex',
      allowNull: false
    },
    uspassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'person',
        key: 'peoid'
      }
    },
    usstatus: {
      type: 'NUMERIC',
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
