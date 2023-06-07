const { Sequelize, DataTypes, Model } = require('sequelize')

const OBJETIVO_TECNICO_TABLE = 'ObjetivoTecnico'

const ObjetivoTecnicoSchema = {
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

class ObjetivoTecnico extends Model {
  static associate(models) {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + OBJETIVO_TECNICO_TABLE,
      modelName: OBJETIVO_TECNICO_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  OBJETIVO_TECNICO_TABLE,
  ObjetivoTecnico,
  ObjetivoTecnicoSchema
}
