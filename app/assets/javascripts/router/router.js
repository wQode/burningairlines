var app = app || {};
var airplanes = new app.Airplanes();

app.Router = Backbone.Router.extend({
	routes: {
	'': 'index',
	'about': 'about',
	'airplane/:id' : 'showPlane'
	},

	initialize: function() {
		console.log('Router initialized');
		Backbone.history.start();
  },

  index: function () {
  	airplanes.fetch().done( function () {
  		var appView = new app.AppView({collection: airplanes});
    	appView.render();
  	});

  },

  about: function () {
  	console.log('about page');
  	var aboutView = new app.AboutView();
  },

  showPlane: function(id){
  		var airline = airplanes.get(id);
  		// debugger;
  		console.log(airline)
  		new app.airplaneView({ model: airline });
  }

});



