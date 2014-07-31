var app = app || {};

app.airplaneView = Backbone.View.extend({
  // tagName: 'div',

  // className: 'seat_div',
  el: "#main",

  initialize: function() {
    console.log('this is for single plane page yoy!');
    $('#index').hide();
    $('airplane_details').show();

    var airplane = Handlebars.compile(app.templates.viewAirplane);
    this.$el.html( app.templates.viewAirplane );
    var view = this;

    this.collection.each(function (j) {
     var $row = j.get('rows');
     var $colums = j.get('colums');
     var $totalSeatNumber = ($row) * ($colums)

     for(var s=0; s<totalSeatNumber; s++){
      //var $airplaneSeatDiv = ('<div class="airplaneSeatDiv"/>')
      var $seat = ('<div id="seat">'+ s +'</div>');
      //$airplaneSeatDiv.append($seat);
      view.$el.find('#seat_option').append($seat);
     };
    });

  },

  render: function(){
    // var airplane_html = Handlebars.compile(app.templates.airplaneView);
    // var copy = airplane_html( this.model.toJSON() );
    // this.$el.html( copy );


   }

});