const AWS = require('aws-sdk');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});


exports.handler = async (event) => {
    var docClient = new AWS.DynamoDB.DocumentClient();
    let table = "blog_details"; 
    let params = {
      TableName: table
    }

    let result = await docClient.scan(params).promise();
    console.log(result.Items);
    return result.Items;

  }