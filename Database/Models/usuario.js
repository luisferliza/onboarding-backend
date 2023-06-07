const { Sequelize, DataTypes, Model } = require('sequelize')

const USER_TABLE = 'Usuario'

const usersSchema = {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombreCompleto: { allowNull: false, type: DataTypes.STRING },
  usuario: { allowNull: false, type: DataTypes.STRING(50), unique: true },
  email: { allowNull: true, type: DataTypes.STRING },
  onboardingCompleto: {
    allowNull: false,
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  //usuarioAD: { allowNull: true, type: DataTypes.STRING(512) },
  //autenticacionWindows: { defaultValue: false, type: DataTypes.BOOLEAN },
  puesto: { allowNull: true, type: DataTypes.STRING },
  jefeInmediato: {
    allowNull: true,
    type: DataTypes.STRING(15),
    defaultValue: null
  },
  departamento: { allowNull: true, type: DataTypes.STRING, defaultValue: null },
  password: { allowNull: false, type: DataTypes.STRING },
  cambioClave: {
    allowNull: false,
    defaultValue: false,
    type: DataTypes.BOOLEAN
  },
  nivelOrganizacionalId: { type: DataTypes.INTEGER, allowNull: true },
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
  }
}

class User extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: 'T' + USER_TABLE,
      modelName: USER_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  USER_TABLE,
  User,
  usersSchema
}
