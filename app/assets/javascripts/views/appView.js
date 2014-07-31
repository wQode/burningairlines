var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#main', 

  events: {
    'click' : 'singleAirplane'
  },

	initialize: function() {
		console.log('AppView initalized');
	},
	render: function () {      
    // var appView = new app.AppView({collection: airplanes});
    //   appView.render();
    // });
		var airplanes_maker_function = Handlebars.compile(app.templates.appView);
    // var airplane_html = airplanes_maker_function( this.model.toJSON() );
    // this.$el.html(airplane_html);

    this.$el.html( app.templates.appView ); 
    var view = this;
    
      this.collection.each(function (p) {
      console.log(p);
      // var airplane_view = new app.PostListView ( {model: p} );
      view.$el.find('#airplanes_list').append('<p>' +p.get('name')+ '</p>');
    });

  },

  singleAirplane: function(){
    app.router.navigate('airplane/' + this.$el.get('id'), true );
    console.log(this);
  }
});