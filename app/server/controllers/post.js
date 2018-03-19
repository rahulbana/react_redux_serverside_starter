const postCtrl =  {
  getPosts: async (ctx) => {
    const postData = [
      { 'id': 1, 'catid': '1', 'title': 'New dfjsfajsdf', desc: 'sjkfgas fasjhfhasd1' },
      { 'id': 2, 'catid': '2', 'title': 'Sports fjsdf sdfks dfd', desc: 'sjkfgas fasjhfhasd2' }
    ]
    ctx.status = 200
    ctx.body = { status: true, data: postData }
  },
  createPost: async (ctx) => {
    ctx.status = 201
    ctx.body = { status: true, msg: 'post created !' }
  }
}

export default postCtrl
