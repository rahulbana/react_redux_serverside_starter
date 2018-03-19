import Usermodel from 'server/models/User'

const userCtrl =  {
  getUser: async (ctx) => {
    const ddd = await Usermodel.find({})
    console.log(ddd)
    ctx.status = 200
    ctx.body = { status: true, msg: ddd }
  },
  createUser: async (ctx) => {
    const user = new Usermodel()
    user.firstname = 'Rahul'
    user.lastname = 'Bana'
    user.email = 'rbana@ddd.com'
    user.save((err) => {
      if (err) {
        console.log(err)
        ctx.status = 500
        ctx.body = { status: false, err: err }
      } else {
        console.log('err')
        ctx.status = 201
        ctx.body = { status: true, msg: 'user created !' }
      }
    })
  }
}

export default userCtrl
