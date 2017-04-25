/* jshint indent: 2 */


module.exports = function(sequelize, DataTypes) {
  return sequelize.define('responsevalue', {
    rvoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    },
    rvresp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rvdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    proid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    },
    sysoid: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    faoidsource: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    faoiddestination: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'question',
        key: 'quoid'
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'responsevalue'
  });
}