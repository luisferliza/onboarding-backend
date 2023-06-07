const { Sequelize, DataTypes, Model } = require('sequelize')
const { User } = require('./usuario')

const EVALUACION_TABLE = 'Evaluacion'

const EvaluacionSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
  descripcion: { allowNull: false, type: DataTypes.STRING },
  nivel: { allowNull: false, type: DataTypes.INTEGER },
  completa: { allowNull: false, type: DataTypes.BOOLEAN, defaultValue: false },
  comentarios: { allowNull: true, type: DataTypes.TEXT('medium') },
  // Auditoria
  activo: { allowNull: false, defaultValue: true, type: DataTypes.BOOLEAN },
  eliminado: { allowNull: false, defaultValue: false, type: DataTypes.BOOLEAN },
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  fechaModificacion: {
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  usuarioCreacion: { allowNull: true, type: DataTypes.STRING },
  usuarioModificacion: { allowNull: true, type: DataTypes.STRING }
}

class Evaluacion extends Model {
  static associate(models) {
    //associate with user
    Evaluacion.belongsTo(User, {
      foreignKey: {
        name: 'idUsuario',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + EVALUACION_TABLE,
      modelName: EVALUACION_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  EVALUACION_TABLE,
  Evaluacion,
  EvaluacionSchema
}
