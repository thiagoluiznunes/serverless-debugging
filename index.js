exports.handler = async (event) => {
  let response = null
  try {
    switch (event.service) {
      case 'option1':
        // TODO: Your code here...
        response = {
          statusCode: 200,
          body: JSON.stringify({ message: event.message })
        }
        break
      case 'option2':
        // TODO: Your code here...
        response = {
          statusCode: 200,
          body: JSON.stringify({ message: event.message })
        }
        break
      default:
        response = {
          statusCode: 404,
          body: JSON.stringify({ message: 'Service not found!' })
        }
    }
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify({ message: new Error('Error to perform lambda function') })
    }
  }
  return response
}
