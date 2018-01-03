// In the evening of December 17th 2017 at 22:08 (1513548530971 in milliseconds) important documents were stolen from Hamburg's town hall.
// 5 Cars were seen leaving the town hall's parking lot around the time of the robbery. 
// All 5 cars were sighted numerous times as they made their way through the city.
// You have the information about the sightings and where (lat, lon) and when (time) they happened.
// You are investigating the case and are trying to figure out which car is most likely to be the escape car from the robbery.

// To help you do this complete the following tasks:

// Task 1:
// Draw the path of each car as given by the sightings onto a map.
// Place a marker that makes it clear which car it is at the position of the final sighting.

// Task 2:
// Create a list of all 5 vehicles.
// Calculate and display the distance they covered from the town hall along all the sightings.
// Calculate and display their average speed during their journey through the city.
// Sort them by the speed at which they travelled on average.

const cars = [
    {
        model: 'Alfa Romeo Quadrifoglio',
        licensePlate: 'HH-AE-23',
        color: 'green',
        sightings: [
            { lat: 53.5499866, lon: 10.000249, time: 1513548530971 },
            { lat: 53.5508397, lon: 9.993983, time: 1513548697193 },
            { lat: 53.5502496, lon: 10.0071376, time: 1513548863415 },
            { lat: 53.5521722, lon: 10.0174907, time: 1513549029638 },
            { lat: 53.5536719, lon: 10.0263889, time: 1513549195860 },
            { lat: 53.5546981, lon: 10.0339527, time: 1513549362082 },
            { lat: 53.5553227, lon: 10.0432868, time: 1513549528304 },
            { lat: 53.5552016, lon: 10.0542302, time: 1513549694527 },
            { lat: 53.5537803, lon: 10.0657959, time: 1513549860749 },
            { lat: 53.5474213, lon: 10.0850925, time: 1513550026971 }
        ]
    },
    {
        model: 'Mercedes E Class',
        licensePlate: 'HH-HG-53',
        color: 'orange',
        sightings: [
            { lat: 53.5552901, lon: 9.9883475, time: 1513548530971 },
            { lat: 53.5508519, lon: 9.9940018, time: 1513548749138 },
            { lat: 53.5576305, lon: 9.9835672, time: 1513548967304 },
            { lat: 53.5623708, lon: 9.9762125, time: 1513549185471 },
            { lat: 53.567137, lon: 9.9809332, time: 1513549403638 },
            { lat: 53.5724124, lon: 9.9786587, time: 1513549621804 },
            { lat: 53.5779674, lon: 9.9766846, time: 1513549839971 },
            { lat: 53.5840822, lon: 9.9696464, time: 1513550058138 },
            { lat: 53.5928136, lon: 9.9669631, time: 1513550276304 },
            { lat: 53.5997218, lon: 9.9641962, time: 1513550494471 }
        ]
    },
    {
        model: 'Volkswagen Passat',
        licensePlate: 'HH-TZ-34',
        color: 'silver',
        sightings: [
            { lat: 53.5508726, lon: 9.9939167, time: 1513548530971 },
            { lat: 53.5587887, lon: 10.0081525, time: 1513548637330 },
            { lat: 53.5691353, lon: 10.0157811, time: 1513548743689 },
            { lat: 53.577702, lon: 10.0098572, time: 1513548850048 },
            { lat: 53.5867609, lon: 10.0030512, time: 1513548956407 },
            { lat: 53.5919055, lon: 9.9991357, time: 1513549062766 },
            { lat: 53.6036561, lon: 9.9962105, time: 1513549169125 },
            { lat: 53.6099502, lon: 10.0110621, time: 1513549275484 },
            { lat: 53.6209833, lon: 10.028066, time: 1513549381843 },
            { lat: 53.6329995, lon: 10.0454436, time: 1513549488202 }
        ]
    },
    {
        model: 'BMW M3',
        licensePlate: 'HH-AP-10',
        color: 'black',
        sightings: [
            { lat: 53.5508726, lon: 9.9939167, time: 1513548530971 },
            { lat: 53.549607, lon: 9.9923264, time: 1513548684304 },
            { lat: 53.5486636, lon: 9.9875414, time: 1513548837638 },
            { lat: 53.544979, lon: 9.9838721, time: 1513548990971 },
            { lat: 53.5443415, lon: 9.9762332, time: 1513549144304 },
            { lat: 53.546115, lon: 9.9689108, time: 1513549297638 },
            { lat: 53.5463815, lon: 9.9612772, time: 1513549450971 },
            { lat: 53.545693, lon: 9.9541532, time: 1513549604304 },
            { lat: 53.5463232, lon: 9.9450556, time: 1513549757638 },
            { lat: 53.5464197, lon: 9.9369442, time: 1513549910971 }
        ]
    },
    {
        model: 'Mazda 6',
        licensePlate: 'HH-YL-91',
        color: 'blue',
        sightings: [
            { lat: 53.5508726, lon: 9.9939167, time: 1513548530971 },
            { lat: 53.5499846, lon: 10.0002167, time: 1513548686804 },
            { lat: 53.5503698, lon: 10.0072507, time: 1513548842638 },
            { lat: 53.5518301, lon: 10.0162634, time: 1513548998471 },
            { lat: 53.553597, lon: 10.0255389, time: 1513549154304 },
            { lat: 53.5550209, lon: 10.036504, time: 1513549310138 },
            { lat: 53.5554536, lon: 10.0423304, time: 1513549465971 },
            { lat: 53.5548407, lon: 10.0571391, time: 1513549621804 },
            { lat: 53.5525692, lon: 10.071432, time: 1513549777638 },
            { lat: 53.5494322, lon: 10.0807785, time: 1513549933471 }
        ]
    }
];
