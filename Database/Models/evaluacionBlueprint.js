const { Sequelize, DataTypes, Model } = require('sequelize')

const EVALUACION_BLUEPRINT_TABLE = 'EvaluacionBlueprint'

const EvaluacionBlueprintSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
  descripcion: { allowNull: false, type: DataTypes.STRING },
  nivel: { allowNull: false, type: DataTypes.INTEGER },
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

class EvaluacionBlueprint extends Model {
  static associate(models) {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + EVALUACION_BLUEPRINT_TABLE,
      modelName: EVALUACION_BLUEPRINT_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  EVALUACION_BLUEPRINT_TABLE,
  EvaluacionBlueprint,
  EvaluacionBlueprintSchema
}
