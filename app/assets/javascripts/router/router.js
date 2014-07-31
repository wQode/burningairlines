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
		app.flights = new app.Flights();
		app.flights.fetch();

		app.users = new app.Users();
		app.users.fetch();
		
		app.reservations = new app.Reservations();
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
		var airplane = app.airplanes.get(id);
		new app.AirplaneView({model: airplane});
	},
	getFlight: function(){
		console.log('getFlight');
		var flight = app.flights.get(id);
		new app.FlightView({model: flight});
	},
	getUser: function(){
		console.log('getUser');
		var user = app.users.get(id);
		new app.UserView({model: user});
	},
	getReservation: function(){
		console.log('getReservation');
		var reservation = app.reservations.get(id);
		new app.ReservationView({model: reservation});
	}
});

