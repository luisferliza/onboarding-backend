const { Sequelize, DataTypes, Model } = require('sequelize')

const OBJETIVO_CONDUCTUAL_TABLE = 'ObjetivoConductual'

const ObjetivoConductualSchema = {
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

class ObjetivoConductual extends Model {
  static associate(models) {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + OBJETIVO_CONDUCTUAL_TABLE,
      modelName: OBJETIVO_CONDUCTUAL_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  OBJETIVO_CONDUCTUAL_TABLE,
  ObjetivoConductual,
  ObjetivoConductualSchema
}
