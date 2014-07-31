var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
	'': 'index',
	'airplanes/:id': 'getAirplane',
	'flights/:id': 'getFlight'
	},
	initialize: function() {
		console.log('Router initialized');
		app.airplanes = new app.Airplanes();
		app.airplanes.fetch().done(function (){
				Backbone.history.start();
			});
	},
	index: function() {
		console.log('index');
		var appView = new app.AppView({colection: app.airplanes});
		appView.render();
	},
	getAirplane: function() {
		console.log('getAirplane');
		new app.AirplaneView({model: airplane});
	},
	getFlight: function(){
		console.log('getFlight');
		new app.FlightView({model: flight});
	} 
}),


