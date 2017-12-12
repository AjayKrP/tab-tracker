const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolacy = require('../policies/AuthenticationControllerPolicies')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolacy.register,
      AuthenticationController.register)
}