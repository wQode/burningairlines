var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  events: {
    'click .airplane_name' : 'singleAirplane'
  },

  initialize: function() {
    console.log('AppView initalized');
  },

  render: function () {
    var airplanes_maker_function = Handlebars.compile(app.templates.appView);
    this.$el.html( app.templates.appView );
    var view = this;

    this.collection.each(function (p) {
///////// tried to get id for url, (it can be invisible later) I had to find a new way like this
///////// because we didn't use 'tagName' to append its name so click link didn't work, I am still fixing though
      var airplane_name = p.get('name');
      var airplane_id = p.get('id');
      var $p = $('<p class="airplane_name">'+ airplane_name +'</p>');
      var $span = $("<span id='airplane_id'>"+ airplane_id +' </span> ');

      $p.prepend($span);
      view.$el.find('#airplanes_list').append($p);


//////// airplane seats - tried it here as single plane page is not working now
//////// so it is showing two flight seat, but once the single page works it will be ok!
       var $row = p.get('rows');
       var $colums = p.get('colums');
       console.log($row);
       console.log($colums);
       var $totalSeatNumber = $row * $colums

       for(var s=0; s<$totalSeatNumber+1; s++){
          //var $airplaneSeatDiv = ('<div class="airplaneSeatDiv"/>')
          var $seat = $('<div id="seat">'+ s +'</div>');
          $('#main').append($seat);
      };

    });

  },

  singleAirplane: function(){
    app.router.navigate('airplane/' + this.$('#airplane_id').text(), true );
    console.log(this);
  }
});