const AWS = require('aws-sdk');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});


exports.handler = async (event) => {
    const createBookInput = event.arguments.input;
    console.log("event", event.arguments.input)
    var docClient = new AWS.DynamoDB.DocumentClient();
    let table = "blog_details";
    // const params = {
    //   Key: event.arguments.id,
    //   TableName: table,
    // };
  
    let params = {
      TableName: table,
      Key: {
        ...createBookInput
        // id: Number(event.arguments.id)
      }
    }

    let result = await docClient.get(params).promise();
    console.log(result.Item);
    return result.Item;
  
    // try {
    //   let result = await docClient.get(params).promise();
  
    //   console.log(result);
  
    //   return {
    //     body: JSON.stringify({
    //       message: "Executed succesfully",
    //       data: result.Item
    //     })
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }