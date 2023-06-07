const { Criterio, CriterioSchema } = require('./criterio')
const { Evaluacion, EvaluacionSchema } = require('./evaluacion')
const {
  EvaluacionBlueprint,
  EvaluacionBlueprintSchema
} = require('./evaluacionBlueprint')
const {
  ObjetivoConductual,
  ObjetivoConductualSchema
} = require('./objetivoConductual')
const { ObjetivoTecnico, ObjetivoTecnicoSchema } = require('./objetivoTecnico')
const { Pregunta, PreguntaSchema } = require('./pregunta')
const {
  PreguntaBlueprint,
  PreguntaBlueprintSchema
} = require('./preguntaBlueprint')
const { Seccion, SeccionSchema } = require('./seccion')
const {
  SeccionBlueprint,
  SeccionBlueprintSchema
} = require('./seccionBlueprint')
const { TipoEvaluacion, TipoEvaluacionSchema } = require('./tipoEvaluacion')
const {
  TipoEvaluacionBlueprint,
  TipoEvaluacionBlueprintSchema
} = require('./tipoEvaluacionBlueprint')
const { User, usersSchema } = require('./usuario')

function setupModels(sequelize) {
  User.init(usersSchema, User.config(sequelize))
  Criterio.init(CriterioSchema, Criterio.config(sequelize))
  ObjetivoConductual.init(
    ObjetivoConductualSchema,
    ObjetivoConductual.config(sequelize)
  )
  ObjetivoTecnico.init(ObjetivoTecnicoSchema, ObjetivoTecnico.config(sequelize))
  EvaluacionBlueprint.init(
    EvaluacionBlueprintSchema,
    EvaluacionBlueprint.config(sequelize)
  )
  //   EvaluacionConductualBlueprint.init(
  //     EvaluacionConductualBlueprintSchema,
  //     EvaluacionConductualBlueprint.config(sequelize)
  //   )
  //   EvaluacionTecnicaBlueprint.init(
  //     EvaluacionTecnicaBlueprintSchema,
  //     EvaluacionTecnicaBlueprint.config(sequelize)
  //   )
  TipoEvaluacionBlueprint.init(
    TipoEvaluacionBlueprintSchema,
    TipoEvaluacionBlueprint.config(sequelize)
  )
  SeccionBlueprint.init(
    SeccionBlueprintSchema,
    SeccionBlueprint.config(sequelize)
  )
  PreguntaBlueprint.init(
    PreguntaBlueprintSchema,
    PreguntaBlueprint.config(sequelize)
  )
  Evaluacion.init(EvaluacionSchema, Evaluacion.config(sequelize))
  TipoEvaluacion.init(TipoEvaluacionSchema, TipoEvaluacion.config(sequelize))
  Seccion.init(SeccionSchema, Seccion.config(sequelize))
  Pregunta.init(PreguntaSchema, Pregunta.config(sequelize))

  User.associate(sequelize.models)
  Criterio.associate(sequelize.models)
  ObjetivoConductual.associate(sequelize.models)
  ObjetivoTecnico.associate(sequelize.models)
  EvaluacionBlueprint.associate(sequelize.models)
  TipoEvaluacionBlueprint.associate(sequelize.models)
  SeccionBlueprint.associate(sequelize.models)
  PreguntaBlueprint.associate(sequelize.models)
  Evaluacion.associate(sequelize.models)
  TipoEvaluacion.associate(sequelize.models)
  Seccion.associate(sequelize.models)
  Pregunta.associate(sequelize.models)
  //   EvaluacionConductualBlueprint.associate(sequelize.models)
  //   EvaluacionTecnicaBlueprint.associate(sequelize.models)
}

module.exports = setupModels
