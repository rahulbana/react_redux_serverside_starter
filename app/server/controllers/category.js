const categoryCtrl =  {
  getCategories: async (ctx) => {
    ctx.throw(404)
  },
  getCategoryById: async (ctx) => {
    ctx.status = 200
    ctx.body = { status: true, msg: 'category created !' }
  },
  createCategory: async (ctx) => {
    ctx.status = 201
    ctx.body = { status: true, msg: 'category created !' }
  }
}

export default categoryCtrl
