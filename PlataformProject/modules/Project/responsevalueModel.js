/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('responsevalue', {
    rvoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faoidsource: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    faoiddestination: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    },
    quoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'question',
        key: 'quoid'
      }
    },
    rvdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rvresp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sysoid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tqoid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    usoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    }
  }, {
    tableName: 'responsevalue'
  });
};
