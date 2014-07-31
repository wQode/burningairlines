var app = app || {};

app.Airplane = Backbone.Model.extend({
	url: '/airplanes',
	defaults: {
		name: "Flying Fortress of Backbone Death",
		rows: "2",
		columns: "4"
	}
});