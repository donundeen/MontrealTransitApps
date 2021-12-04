// testing api
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');
//const fetch = import('node-fetch');
//import fetch from 'node-fetch'
const fetchPromise = import('node-fetch').then(mod => mod.default)
const fetch = (...args) => fetchPromise.then(fetch => fetch(...args))

const secrets = require("./secrets.json");
const apikey = secrets.apikey;
const myStopSequence = secrets.myStopSequence;
const callOrigin = secrets.callOrigin;
const statusApiURL = secrets.statusApiURL;
const vehiclePositionsApiURL = secrets.vehiclePositionsApiURL;
const myRouteID = secrets.myRouteID;

const statusCodes = {
	0: "INCOMING_AT",
	1: "STOPPED_AT",
	2: "IN_TRANSIT_TO",	
}


get57Pos();
//getServiceStatus();



function getServiceStatus(){

	fetch(statusApiURL, {
        method: 'get',
        headers: {'apikey': apikey,
	  		'origin': callOrigin },
    })
    .then(res => res.json())
    .then(json => console.log(JSON.stringify(json, null, "  ")));


}


function get57Pos(){

	var requestSettings = {
	  method: 'GET',
	  url: vehiclePositionsApiURL,
	  headers : {
	  		'apikey': apikey
	  	},
	  encoding: null
	};

	var closestBus = false;
	var closestCurrentSequence = 0;
	var closesStatus = 0;

	request(requestSettings, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
	    feed.entity.forEach(function(entity) {
	      var routeId = entity.vehicle.trip.routeId;
	      if (routeId == myRouteID){
	      	  var currentStopSequence = entity.vehicle.currentStopSequence;
	      	  if(currentStopSequence <= myStopSequence && currentStopSequence > closestCurrentSequence){
	      	  	closestCurrentSequence = currentStopSequence;
	      	  	closesStatus = entity.vehicle.currentStatus;
	      	  	closestBus = entity;
	      	  }
		  }
	    });
	    console.log("closest bus");
	    console.log(closestBus);
	    console.log("closest bus is " + statusCodes[closesStatus]+ " stop " + closestCurrentSequence );
	  }else{
	  	console.log(error + " : status code " +response.statusCode);
	  }
	});
}


/*
FeedEntity {
  id: '40237',
  vehicle: VehiclePosition {
    trip: TripDescriptor {
      tripId: '243237129',
      startTime: '16:58:00',
      startDate: '20211203',
      routeId: '112'
    },
    position: Position {
      latitude: 45.424156188964844,
      longitude: -73.6461181640625,
      bearing: 288,
      speed: 10.000080108642578
    },
    currentStopSequence: 39,
    currentStatus: 2,
    timestamp: Long { low: 1638570336, high: 0, unsigned: true },
    vehicle: VehicleDescriptor { id: '40237' },
    occupancyStatus: 1
  }
}
*/