const AWS = require("aws-sdk");
const fs = require('fs');
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing Scranton into DynamoDB. Please wait.");
let blogs = JSON.parse(fs.readFileSync('test_items.json', 'utf8'));
blogs.forEach(function(blog) {
var params = {
        TableName: "blog_details",
        Item: {
            "id": blog.id,
            "title": blog.title,
            "blogurl": blog.blogurl,
            "author": blog.author
        }
    };
docClient.put(params, function(err, data) {
       if (err) {
           console.error(err);
       } else {
           console.log("PutItem succeeded:", blog.name);
       }
    });
});