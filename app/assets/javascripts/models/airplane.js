var app = app || {};

app.Airplane = Backbone.Model.extend({
	defaults: {
		name: "Flying Fortress of Backbone Death",
		rows: "2",
		columns: "4"
	}
});