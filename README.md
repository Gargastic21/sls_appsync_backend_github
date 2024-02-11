# Graph_ql setup

GraphQL API using Serverless + AWS AppSync + DynamoDB + Lambda resolvers + API KEY.

## Reference graphql links
```bash
https://medium.com/@facundofasciolo/graphql-api-using-serverless-aws-appsync-dynamodb-lambda-resolvers-cognito-part-1-8ec947614b86
```

## Installation
Install Nodejs.
```bash
Npm install -g serverless
serverless create --template aws-nodejs --path sls_appsync_backend
npm i serverless-appsync-plugin
Npm i -g serverless-offline
npm i serverless-appsync-simulator
npm i cfn-resolver-lib@1.1.7
```
Install Chocolatey to install watchman on windows. Steps in the below link.
```bash
https://www.liquidweb.com/kb/how-to-install-chocolatey-on-windows/
https://facebook.github.io/watchman/docs/install.html
```
Incase serverless doesn't work
```bash
https://stackoverflow.com/questions/51887616/windows-is-not-recognizing-serverless-as-internal-or-external-command
```
Install local DynamoDB.
```bash
1.https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
2. download zip file
3.After you download the zip, extract the contents.
4. To start DynamoDB on your computer, open a command prompt window, 
   navigate to the directory where you extracted DynamoDBLocal.jar, 
   and enter the following command.
5. cd C:\Users\amish\Downloads\dynamodb_local_latest
6. install java incase java is not downloaded
7. https://youtu.be/SQykK40fFds?si=l5DXyecLWFd_ZHEQ : to install java.
8.java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
9.aws dynamodb list-tables --endpoint-url http://localhost:8000
10. aws dynamodb scan --table-name BLOG --endpoint-url http://localhost:8000
```
api_key
```bash
https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html
```
## Usage run in terminal and graphql is always a post http method.

```powershell
serverless offline start --stage local
```
```postman
GET:
http://192.168.1.13:20002/graphql
HEADERS: x-api-key:0123456789
AUTHORIZATION: NO Auth
BODY(select graphql): 
QUERY:
# query(
#     $id: ID!
# ){
#     getBlog(id: $id){
#         id
#         title
#         author
#         blogurl
#     }
# }

query getBlog{
getBlog(input:{
        id: 2,
        title: "Accounting"
    }){
    id
    title
    author
    blogurl
}
}


GRAPHQL VARIABLES:
{"id": "4"}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
