var app = app || {};

$(document).ready( function () {
	app.templates = {
		appView: $('#app-template').html(),
		airplaneListView: $('#list-template').html(),
    airplaneView: $('#airplane_template').html()
	};

	app.router = new app.Router();
})