// // let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// import axios from 'axios';


// const fetchData = (url_api) => {
//   return new Promise((resolve, reject) => {
//     console.log(url_api)
//     const xhttp = new XMLHttpRequest();
//     xhttp.open('GET', url_api);
//     xhttp.onreadystatechange = (() => {
//       if (xhttp.readyState ===4) {
//         (xhttp.status ===200)
//           ? resolve(JSON.parse(xhttp.responseText))
//           : reject(new Error('error' , url_api))
//       }
//     })
//     xhttp.send();
//   });
// }


// module.exports = fetchData;
// //