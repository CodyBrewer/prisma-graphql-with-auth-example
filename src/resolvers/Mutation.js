// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET;

// async function signup(parent, args, context, info) {
//     const hashedPass = await bcrypt.hash(args.password, 10);
//     const { password, ...user } = await context.prisma.createUser({ ...args, password: hashedPass, });
//     const token = jwt.sign({ userId: user.id }, JWT_SECRET);

//     console.log('token is: ' + token);
//     console.log('user is: ' + user);

//     return {
//         token,
//         user,
//     }
// }

// module.exports = {
//     signup,
// }

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const APP_SECRET = 'modern-backend-auth'

async function signup(parent, args, context, info) {
  const hashedPass = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password: hashedPass })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

module.exports = {
  signup
}