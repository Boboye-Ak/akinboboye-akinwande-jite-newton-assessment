const User = require("../models/Users")
const { createToken } = require("../utils/tokens")


module.exports.signup_post = async (req, res) => {
    /*  #swagger.parameters['body'] = {
         in: 'body',
         description: 'Add new user.',
         schema: {
             $username: 'boboye66',
             $password: '#Strongpassword321'
             
         }
 } */
    /* #swagger.responses[200] = {
  description: 'Username, status and token.',
  schema: {
      status: 200,
      error: false,
      username: 'boboye66',
      accessToken: 'access_token'
  }
} */
    /* #swagger.responses[400] = {
description: 'Either username/password is missing or password fails validation',
schema: {
  status: 400,
  error: true,
  message: 'Please enter username and password/Password too weak. Passowrd must contain letters, numbers, symbols and must be at least 8 characters long with at least one capital letter',
  
}
} */
    /* #swagger.responses[409] = {
  description: 'The Username you chose is already in use.',
  schema: {
      status: 409,
      error: true,
      message: 'Username already in use',
  }
} */

    // #swagger.description = 'Endpoint to register as a new user using username and password. Usernames must be unique. Passwords must meet criteria of at least one upper case character, at least one lower case character, at least one numerical character, at least one symbol and must be at least 8 characters long'
    try {
        const { username } = req.body
        const hashedPassword = req.hashedPassword
        const newUser = new User({ username: username, password: hashedPassword })
        await newUser.save()
        const accessToken = createToken(newUser._id)
        return res.status(200).json({ message: "New User Created",error: false, status: 200, username: newUser.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error",error: true, status: 500 })
    }


}

module.exports.login_post = async (req, res) => {
    /*  #swagger.parameters['body'] = {
     in: 'body',
     description: 'Login as existing user.',
     schema: {
         $username: 'boboye66',
         $password: '#Strongpassword321'               
     }
} */
    /* #swagger.responses[200] = {
      description: 'Username, status and token.',
      schema: {
          status: 200,
          error: false,
          username: 'boboye66',
          accessToken: 'access_token'
      }
} */
    /* #swagger.responses[400] = {
description: 'Either username/password is missing',
schema: {
  status: 400,
  error: true,
  message: 'Please enter username and password',
  
}
} */
    /* #swagger.responses[404] = {
description: 'Username not found in database',
schema: {
  status: 404,
  error: true,
  message: 'User with username not found',
  
}
} */
    /* #swagger.responses[401] = {
description: 'The password you entered is incorrect',
schema: {
  status: 401,
  error: true,
  message: 'Incorrect password',
  
}
} */
    // #swagger.description = 'Endpoint for users to login using username and password'
    try {
        const user = req.user
        const accessToken = createToken(user._id)
        return res.status(200).json({ message: "Login Successful", status: 200, error: false, username: user.username, accessToken: accessToken })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Server Error",error: true, status: 500 })
    }

}


