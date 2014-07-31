var app = app || {};

app.Flight = Backbone.Model.extend({
	url: '/flights',
	defaults: {
		number: 666,
		origin: 'SYD',
		destination: 'NYC',
		date: '09/09/2014',
		plane: "Flying Fortress of Backbone Death"
	}
});