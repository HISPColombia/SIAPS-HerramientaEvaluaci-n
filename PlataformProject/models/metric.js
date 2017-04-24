/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metric', {
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'attribute',
        key: 'atoid'
      }
    },
    mename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meformula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mevaluemax: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    mevaluemin: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    melinebasevalref: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'metric'
  });
};
