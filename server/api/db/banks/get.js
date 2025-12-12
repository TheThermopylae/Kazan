import banks from '../../../../db/banks.json'

export default defineEventHandler(async event => {
  try {
    return banks
  } catch (error) {
    return error
  }
})
