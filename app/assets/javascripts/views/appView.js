var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#main', 
	initalize: function() {
		console.log('AppView initalized');
	},
	render: function () {
		this.$el.html(app.templates.appView);
		this.collection.each(function (post) {
			var view = new app.AiListView({model: post});
			$('#posts').append( view.render() );
		});
	}
});