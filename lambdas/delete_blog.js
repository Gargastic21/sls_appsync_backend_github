const AWS = require('aws-sdk');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

exports.handler = async (event) => {
    const createBookInput = event.arguments.input;
    console.log(createBookInput)
    var docClient = new AWS.DynamoDB.DocumentClient();
      const params = {
        TableName: "blog_details",
        Key: {
            ...createBookInput
        }
        
      };
      const result = await docClient.delete(params).promise();
      return createBookInput;
  }