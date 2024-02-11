exports.hello = async (event) => {
  console.log({event});

  const books = [
    {
      id: 1,
      title: 'First mocked book'
    },
    {
      id: 2,
      title: 'Second mocked book'
    }
  ];
  console.log(books);
  return books;
};



// 'use strict';

// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };
