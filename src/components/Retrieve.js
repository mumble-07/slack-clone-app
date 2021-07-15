// //GET ALL USERS
//   const configGetUsers = {
//     method: 'get',
//     url: 'http://206.189.91.54//api/v1/users',
//     headers: userListHeaders,
//   };

//   axios(configGetUsers)
//   .then((response) => { console.log(JSON.stringify(response.data));})
//   .then(data => console.log(data))
//   .catch(function (error) { console.log(error);});




//RETRIEVE MESSAGE
// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1',
//   headers: userListHeaders,
//   params:  {
//     "sender_id": 30, //sample2@example.com
//     "receiver_class": "User",
//     "receiver_id": 86, //andy@gmail.com
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });




// const senderReceiverIDs = [
//     {
//       senderID: userDetails[0].id,
//       receiverID: chatScreenData.receivers[0].id,
//     },
//     {
//       senderID: chatScreenData.receivers[0].id,
//       receiverID: userDetails[0].id,
//     }
//   ]
