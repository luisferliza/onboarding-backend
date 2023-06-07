const { Sequelize, DataTypes, Model } = require('sequelize')

const PREGUNTA_TABLE = 'Pregunta'

const PreguntaSchema = {
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

class Pregunta extends Model {
  static associate(models) {
    //associate
    // Se asocia con la tabla de evaluacionBlueprint
    Pregunta.belongsTo(models.Seccion, {
      foreignKey: {
        name: 'idSeccion',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + PREGUNTA_TABLE,
      modelName: PREGUNTA_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  PREGUNTA_TABLE,
  Pregunta,
  PreguntaSchema
}
