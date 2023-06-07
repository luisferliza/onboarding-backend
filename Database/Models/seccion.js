const { Sequelize, DataTypes, Model } = require('sequelize')

const SECCION_TABLE = 'Seccion'

const SeccionSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
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

class Seccion extends Model {
  static associate(models) {
    //associate
    // Se asocia con la tabla de evaluacionBlueprint
    Seccion.belongsTo(models.TipoEvaluacion, {
      foreignKey: {
        name: 'idTipoEvaluacion',
        allowNull: false
      },
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + SECCION_TABLE,
      modelName: SECCION_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  SECCION_TABLE,
  Seccion,
  SeccionSchema
}
