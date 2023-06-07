const { Sequelize, DataTypes, Model } = require('sequelize')

const TIPO_EVALUACION_TABLE = 'TipoEvaluacion'

const TipoEvaluacionSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
  descripcion: { allowNull: false, type: DataTypes.STRING },
  obtenido: { allowNull: false, type: DataTypes.DOUBLE },
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

class TipoEvaluacion extends Model {
  static associate(models) {
    //associate
    // Se asocia con la tabla de evaluacionBlueprint
    TipoEvaluacion.belongsTo(models.Evaluacion, {
      foreignKey: {
        name: 'idEvaluacion',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + TIPO_EVALUACION_TABLE,
      modelName: TIPO_EVALUACION_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  TIPO_EVALUACION_TABLE,
  TipoEvaluacion,
  TipoEvaluacionSchema
}
