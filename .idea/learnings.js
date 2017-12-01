//
// desiredClients = [];
//
// clientsWithMetersLessThan3000.forEach(client => {
//    if (a) {
//      distanceInMeter();
//        client.location.latitude
//      }
//    else {
//      renameProperties();
//      positionArrayToLocationObject(client);
//    }
// })

//
//
//
// var renameProperties = (obj, from, to) => {
//   obj[to] = obj[from];
//   delete obj[from];
// };
// newClients = [];
// //alle distance Werte in Meter umwandeln
// const handle = (client) => {
//   if(client.hasOwnProperty('distance')) {
//     client.distance *= 1000;
//   }
//
//   if(client.distanceLength) {
//
//     clients.forEach((obj) => {
//       renameProperties(obj, 'distanceLength', 'distance')
//     });
//   };
//   return client;
// }
//
// const result = clients.map(handle);
//
//
// console.log(meters, clients);

// ####### ####### ####### ######## #######

//Werte aus distanceLength in distance speichern und distanceLength löschen

//=> warum wird hier die distance der oberen Werte überschrieben?
//Objekte, die distance < 3000 sind, ausgeben

//wenn im Objekt position steht, dann den ersten und zweiten Wert aus dem Array auslesen und in location object (location.lat und location.long) speichern

//position löschen



// function change () {
//     for (i=0; i<clients.length; i++) {
//         let client = clients[i];
//         if (client.distance != undefined && client.distance <= 100) {
//             client.distance = client.distance * 1000;
//         } else if(client.distanceLength != undefined && client.distanceLength <= 100) {
//             client.distanceLength = client.distanceLength * 1000
//         }
//     }
// }
//
// change();
//
// function DistanceUnder3000() {
//
//     let underMaxDistance = [];
//
//     for (i = 0; i < clients.length; i++) {
//         let client = clients[i];
//         distance1 = client.distance;
//         distance2 = client.distanceLength;
//         if ((distance1 || distance2) <= 3000) {
//             underMaxDistance.push(client);
//         }
//     }
//
//     console.log(underMaxDistance);
// }
//
// DistanceUnder3000();
//
// function sameDistanceKeys() {
//   var renameProperties = (obj, from, to) => {
//       obj[to] = obj[from];
//       delete obj[from];
//     };
//
//   if(clients.distanceLength) {
//       clients.forEach(obj => renameProperties(obj, 'distanceLength', 'distance'));
//   };
// };
//
// sameDistanceKeys();
//

// let distanceUnder3000m = (arr) => {
//     //all distances should be counted in meters
//   // arr.distance = arr.map((client) => client.distance *= 1000);
//   // console.log(arr);
//
//
//   if(arr.distanceLength) {
//     arr.forEach(obj => renameProperties(obj, 'distanceLength', 'distance'));
//   };
//   // // var location = (arr) => {
//   // //   arr.forEach(obj => renameProperties(obj, 'position', 'location'));
//   // //   // arr.location = arr.location.slice(0,2);
//   // // };
//   // // location(clients);
//   arr = arr.filter((client) => {
//     if (client.distance <= 100) {
//       console.log(client.distance *= 1000);
//         if (client.distance < 3000) {
//           arr.push(client);
//         }
//     }
//   });
//   //
//   // console.log(arr.distance);
//   console.log(arr);
// };
//
// distanceUnder3000m(clients);

// let positionBeLocation = (client) => {
//   // var location = {
//   //   arr.location.lat,
//   //   arr.location.long
//   // };
//   console.log(arr);
//     //all location values I need are lat and long
//   if(arr.position) {
//     arr.location.lat = arr.position[0];
//     arr.location.long = arr.position[1];
//     delete arr.position;
//   }
//
//   if(arr.location) {
//     arr.location.lat = arr.location.latitude;
//     arr.location.long = arr.location.longitude;
//     delete arr.location.latitude, arr.location.longitude;
//   }
//   return arr.location;
//   // = {
//   //   location['lat'],
//   //   location['long']
//   // };
// };
//
// console.log(positionBeLocation(clients));



// var shortDistance2 = clients.filter((client) => {
//   if(client.distance) {
//     return (client.distance < 3);
//   }
// });
//
// var availableClients = [
//   shortDistance1,
//   shortDistance2
// ];
//
// console.log(availableClients);

// location = {};
// location.lat = clients.map((e) => {
//   console.log(e.location[0]);
//   return e.location[0];
// });

//});

// availableClients.distance = shortDistance.map((e) => {
//   if (e <= 3000) {
//     return availableClients.distance;
//   }
// });
