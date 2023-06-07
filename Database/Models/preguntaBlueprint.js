const { Sequelize, DataTypes, Model } = require('sequelize')

const PREGUNTA_BLUEPRINT_TABLE = 'PreguntaBlueprint'

const PreguntaBlueprintSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  descripcion: { allowNull: false, type: DataTypes.STRING },
  valor: { allowNull: false, type: DataTypes.DOUBLE },
  peso: { allowNull: false, type: DataTypes.DOUBLE },
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

class PreguntaBlueprint extends Model {
  static associate(models) {
    //associate
    // Se asocia con la tabla de evaluacionBlueprint
    PreguntaBlueprint.belongsTo(models.SeccionBlueprint, {
      foreignKey: {
        name: 'idSeccionBlueprint',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + PREGUNTA_BLUEPRINT_TABLE,
      modelName: PREGUNTA_BLUEPRINT_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  PREGUNTA_BLUEPRINT_TABLE,
  PreguntaBlueprint,
  PreguntaBlueprintSchema
}
