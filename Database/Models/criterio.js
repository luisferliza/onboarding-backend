const { Sequelize, DataTypes, Model } = require('sequelize')

const CRITERIO_TABLE = 'Criterio'

const CriterioSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { allowNull: false, type: DataTypes.STRING },
  valor: { allowNull: false, type: DataTypes.DOUBLE },
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

class Criterio extends Model {
  static associate(models) {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + CRITERIO_TABLE,
      modelName: CRITERIO_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  CRITERIO_TABLE,
  Criterio,
  CriterioSchema
}
