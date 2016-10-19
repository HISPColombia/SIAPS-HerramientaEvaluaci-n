/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PHCPhase', {
    phoid: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: 'nextval(phcphase_seq::regclass)',
      primaryKey: true
    },
    phaseid: {
      type: 'NUMERIC',
      allowNull: false
    },
    phdimension: {
      type: 'NUMERIC',
      allowNull: true
    },
    phdimension2: {
      type: 'NUMERIC',
      allowNull: true
    },
    phdimension3: {
      type: 'NUMERIC',
      allowNull: true
    }
  }, {
    tableName: 'PHCPhase'
  });
};
