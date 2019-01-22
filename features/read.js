'use strict';

module.exports.read = async (event, context) => {
  const message = 'Welcome to the get route!';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
