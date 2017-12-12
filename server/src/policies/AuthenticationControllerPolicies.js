const Joi = require('joi')
module.exports = {
    register (req, res, next) {
      const schema = {
        email: Joi.string().email(),
        password: joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
      }

      const {error, value} = Joi.validate(req.body, schema)
      if (error) {
          switch (error.details[0].context.key) {
              case 'email':
                  req.status(400).send({
                      error: 'You must provide a valid email address!!!'
                  })
                  break
              case 'password':
                  res.status(400).send({
                      error: 'Error!!!'
                  })
                  break
              default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                  break
          }
      } else {
          next()
      }
      next()
    }
}