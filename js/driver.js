var clients = [
  {
    distance: 0.9,
    driverId: 342,
    location: {
      latitude: 53.551086,
      longitude: 9.993682
    }
  },
  {
    distance: 0.23,
    driverId: 341,
    location: {
      latitude: 53.5499752,
      longitude: 9.9914271
    }
  },
  {
    distance: 3.3,
    driverId: 332,
    location: {
      latitude: 53.568940,
      longitude: 9.999710
    }
  },
  {
    distance: 6.2,
    driverId: 32,
    location: {
      latitude: 53.591620,
      longitude: 9.985070
    }
  },
  {
    distance: 3.0,
    driverId: 372,
    location: {
      latitude: 53.5648377,
      longitude: 10.0173715
    }
  },
  {
    distance: 10.4,
    driverId: 389,
    location: {
      latitude: 53.510285,
      longitude: 9.989430
    }
  },
  {
    distance: 1.9,
    driverId: 162,
    location: {
      latitude: 53.540408,
      longitude: 9.995621
    }
  },
  {
    distance: 6.8,
    driverId: 678,
    location: {
      latitude: 53.593490,
      longitude: 10.004830
    }
  },
  {
    distance: 11.7,
    driverId: 789,
    location: {
      latitude: 53.502400,
      longitude: 9.989110
    }
  },
  {
    distance: 1.4,
    driverId: 543,
    location: {
      latitude: 53.547958,
      longitude: 10.006729
    }
  },
  {
    distance: 4.2,
    driverId: 544,
    location: {
      latitude: 53.563903,
      longitude: 9.943192
    }
  },
  {
    distance: 7.0,
    driverId: 545,
    location: {
      latitude: 53.5962802,
      longitude: 9.9863953
    }
  },
  {
    distance: 3.8,
    driverId: 546,
    location: {
      latitude: 53.556600,
      longitude: 10.021984
    }
  },
  {
    distance: 9.9,
    driverId: 547,
    location: {
      latitude: 53.534520,
      longitude: 9.969280
    }
  },
  {
    distanceLength: 900,
    driverId: 9372,
    carId: 2250,
    position: [53.551086, 9.993682, 6.11]
  },
  {
    distanceLength: 230,
    driverId: 9373,
    carId: 2251,
    position: [53.5499752, 9.9914271, 6.1]
  },
  {
    distanceLength: 3300,
    driverId: 9374,
    carId: 2252,
    position: [53.568940, 9.999710, 6.04]
  },
  {
    distanceLength: 6200,
    driverId: 9321,
    carId: 2253,
    position: [53.591620, 9.985070, 6.8]
  },
  {
    distanceLength: 3000,
    driverId: 1234,
    carId: 2254,
    position: [53.5648377, 10.0173715, 6.01]
  },
  {
    distanceLength: 10400,
    driverId: 2345,
    carId: 2255,
    position: [53.510285, 9.989430, 6.0]
  },
  {
    distanceLength: 1900,
    driverId: 3456,
    carId: 2256,
    position: [53.540408, 9.995621, 6.12]
  },
  {
    distanceLength: 6800,
    driverId: 4567,
    carId: 2257,
    position: [53.593490, 10.004830, 6.06]
  },
  {
    distanceLength: 11700,
    driverId: 5678,
    carId: 2258,
    position: [53.502400, 9.989110, 5.87]
  },
  {
    distanceLength: 1400,
    driverId: 6789,
    carId: 2259,
    position: [53.547958, 10.006729, 5.9]
  },
  {
    distanceLength: 4200,
    driverId: 7890,
    carId: 2260,
    position: [53.563903, 9.943192, 5.9]
  },
  {
    distanceLength: 7000,
    driverId: 8901,
    carId: 2261,
    position: [53.5962802, 9.9863953, 6.0]
  },
  {
    distanceLength: 3800,
    driverId: 9012,
    carId: 2262,
    position: [53.556600, 10.021984, 6.02]
  },
  {
    distanceLength: 9900,
    driverId: 9876,
    carId: 2263,
    position: [53.534520, 9.969280, 6.1]
  },
  {
    distanceLength: 10700,
    driverId: 8765,
    carId: 2245,
    position: [53.580285, 9.979430, 6.0]
  },
  {
    distanceLength: 5900,
    driverId: 7654,
    carId: 2244,
    position: [53.570408, 9.996621, 6.12]
  },
  {
    distanceLength: 2800,
    driverId: 6543,
    carId: 2243,
    position: [53.693490, 9.994830, 6.06]
  },
  {
    distanceLength: 9700,
    driverId: 5432,
    carId: 2242,
    position: [53.534420, 9.969210, 6.1]
  },
  {
    distanceLength: 700,
    driverId: 4321,
    carId: 2241,
    position: [55.10285, 9.999430, 6.0]
  },
  {
    distanceLength: 5900,
    driverId: 3219,
    carId: 2240,
    position: [53.570408, 9.996621, 6.12]
  },
  {
    distanceLength: 770,
    driverId: 2109,
    carId: 2239,
    position: [55.10385, 9.999440, 6.0]
  },
  {
    distanceLength: 5850,
    driverId: 1098,
    carId: 2238,
    position: [53.570458, 9.996521, 6.12]
  },
]
//console.log(clients.length);

//Return Array of all clients who are less than 3000 meters away in following form:
//{distance: Number in meters, driverId: Number, carId: Number if existent, location {lat: Number, long: Number}}


//alle distance Werte in Meter umwandeln
meters = clients.map((client) => {
  if(client.distance) {
    return client.distance *= 1000;
  };
});
console.log(meters, clients);

//Werte aus distanceLength in distance speichern und distanceLength löschen
if(clients.distanceLength) {
  var renameProperties = (obj, from, to) => {
      obj[to] = obj[from];
      delete obj[from];
    };
  clients.forEach(obj => renameProperties(obj, 'distanceLength', 'distance'));
};
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

// let positionBeLocation = (arr) => {
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
