const { default: axios } = require('axios')

const sendEmail = async (email, subject, evaluacionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const SES_HOST = process.env.SES_HOST
      const resp = await axios.post(SES_HOST, {
        to: [email],
        from: 'onboarding@launion.com.gt',
        subject: subject,
        message: `<h1>Evaluación Completada!<h1>
                <h2>Por favor visita <a href="https://onboarding.luislizama.com/home/evaluaciones/${evaluacionId}">este enlace</a> para ver los resultados</h2>        
        `
      })
      resolve(resp)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  sendEmail
}
