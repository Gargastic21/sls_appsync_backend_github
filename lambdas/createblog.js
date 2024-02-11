const AWS = require('aws-sdk');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});

exports.handler = async (event) => {
    const createBookInput = event.arguments.input;
    var docClient = new AWS.DynamoDB.DocumentClient();
    const newBook = {
        id: 4,
        ...createBookInput
      };

      const params = {
        TableName: "BLOG",
        Item: newBook,
      };
      const result = await docClient.put(params).promise();
      console.log(newBook)
      return newBook;
  }