App.SeatsRowView = Backbone.View.extend({
  tagName: 'li',
  className: 'seats-row seats-row-seats',
  template: _.template('<span><%= posx %></span>'),

  initialize: function() {
    this.$bookButton = $('#bookFlightButton');
  },

  render: function() {
    this.$el.html(this.template(this.collection[0].attributes));

    // foreach col append a span
    this.collection = _.sortBy(this.collection, function(model){ return model.id; });

    _.each(this.collection, function(seat) {
      var seatClass = seat.attributes.availability ? 'seat-free' : 'seat-taken';
      this.$el.append('<span ' +
        'data-id="' + seat.attributes.id + '"' +
        'data-posx="' + seat.attributes.posx + '"' +
        'data-posy="' + seat.attributes.posy + '"' +
        '" class="' + seatClass + '"></span>');
    }, this);

    return this;
  },

  events: {
    'click .seat-free': 'createReservation'
  },

  createReservation: function(e) {
    $('#seatsSelectionContainer').removeClass('col-md-offset-3');
    var $flightDetails = $('#flightDetails');

    $flightDetails.find('.flightDetails').remove();

    $flightDetails.removeClass('hidden');

    var reservationView = new App.ReservationView();

    var $seat = $(e.currentTarget);
    $('.seat-onhold').removeClass('seat-onhold');
    $seat.addClass('seat-onhold');

    var details = {
      user: {
        name: $('#userName').data('user-name')
      },
      flight: {
        number: App.currentFlightDetails.number,
        from: App.currentFlightDetails.origin,
        to: App.currentFlightDetails.destination,
        departure_date: App.currentFlightDetails.departure_date,
        arrival_date: App.currentFlightDetails.arrival_date,
        seat: '' + $seat.data('posx') + $seat.data('posy')
      }
    };

    $flightDetails.append(reservationView.render(details).el);

    this.$bookButton.off('click.book');

    this.$bookButton.on('click.book', function(){
      var flightCallback = $.ajax({
        method: 'POST',
        url: '/reservations',
        dataType: 'json',
        data: {
          reservation: { seat_id: $seat.data('id') }
        }
      });

      flightCallback.then(function(){
        window.location = '/book';
        alert('Flight booked - Have a nice and secure flight with Burning Airlines');
      });
    });
  }
});