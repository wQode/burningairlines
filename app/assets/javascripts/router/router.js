var app = app || {};

app.Router = Backbone.Router.extend({
	routes: {
	'': 'index',
	'about': 'about',
	},

	initialize: function() {
		console.log('Router initialized');
		Backbone.history.start();
  },

  index: function () {
  	var airplanes = new app.Airplanes();
  	airplanes.fetch().done( function () {
	  	var appView = new app.AppView({ collection: airplanes });
	    app.appView.render();
  	});

  },

  about: function () {
  	console.log('about page');
  	var aboutView = new app.AboutView();
  }

});



