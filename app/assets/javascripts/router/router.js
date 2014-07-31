var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
	'': 'index',
	'airplanes/:id': 'getAirplane',
	'flights/:id': 'getFlight',
	'users/:id': 'getUser',
	'reservations/:id': 'getReservation'
	},
	initialize: function() {
		console.log('Router initialized');
		app.flights = new app.Flight();
		app.flights.fetch();
		app.users = new app.User();
		app.users.fetch();
		app.reservations = new app.Reservation();
		app.reservations.fetch();
		app.airplanes = new app.Airplanes();
		app.airplanes.fetch().done(function (){
				Backbone.history.start();
			});
	},
	index: function() {
		console.log('index');
		var appView = new app.AppView({collection: app.airplanes});
		appView.render();
	},
	getAirplane: function() {
		console.log('getAirplane');
		new app.AirplaneView({model: airplane});
	},
	getFlight: function(){
		console.log('getFlight');
		new app.FlightView({model: flight});
	},
	getUser: function(){
		console.log('getUser');
		new app.UserView({model: user});
	},
	getReservation: function(){
		console.log('getReservation');
		new app.ReservationView({model: reservation});
	}
}),


