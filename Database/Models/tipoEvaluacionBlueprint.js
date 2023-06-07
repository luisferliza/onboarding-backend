const { Sequelize, DataTypes, Model } = require('sequelize')

const TIPO_EVALUACION_BLUEPRINT_TABLE = 'TipoEvaluacionBlueprint'

const TipoEvaluacionBlueprintSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
  descripcion: { allowNull: false, type: DataTypes.STRING },
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

class TipoEvaluacionBlueprint extends Model {
  static associate(models) {
    //associate
    // Se asocia con la tabla de evaluacionBlueprint
    TipoEvaluacionBlueprint.belongsTo(models.EvaluacionBlueprint, {
      foreignKey: {
        name: 'idEvaluacionBlueprint',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + TIPO_EVALUACION_BLUEPRINT_TABLE,
      modelName: TIPO_EVALUACION_BLUEPRINT_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  TIPO_EVALUACION_BLUEPRINT_TABLE,
  TipoEvaluacionBlueprint,
  TipoEvaluacionBlueprintSchema
}
