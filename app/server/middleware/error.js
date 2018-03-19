import errorCodes from '../../../utils/errorCodes'

export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.body = { status: false, msg: errorCodes[err.status] }
  }
}
