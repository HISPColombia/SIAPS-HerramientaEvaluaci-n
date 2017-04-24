/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('methodology', {
    meoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mestatus: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    veoid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'version',
        key: 'veoid'
      }
    },
    meauthor: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'methodology'
  });
};
