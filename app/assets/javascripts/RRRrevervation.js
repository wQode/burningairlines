// var rows = 5;
// var colunms = 5;
var app = app || {};

$(document).ready(function(){

  app.SeatView = Backbone.View.extend({
    className: 'seats',

    // initialize: function() {

    // },

    events: {
      'click': 'select',
      'click #btnSave' : 'seatReservation'
    },

    template: _.template('<p><%= seat_number %></p>'),
    render: function(){
      var html = this.template({seat_number: this.model.seat_number })
      this.$el.html( html );
      return this;
    },

    select: function() {
      this.$el.toggleClass('clicked');
      var $booking_details = $('<div class="booking_details"/>');
      var $booked_number = $('<p id="booked_number"> Seat No. '+ this.model.seat_number +'</p>');
      $booking_details.append($booked_number);
      $('.seat_details').append($booking_details);
    },

    seatReservation: function(event){
      this.$el.removeClass('clicked').addClass('reserved');
    }
  });

  app.Reservation = Backbone.Model.extend({
  })

  app.Reservations = Backbone.Collection.extend({
    url: '/reservations',
    model: app.Reservation
  })


  // app.AppView = Backbone.View.extend({
  //   el: '#container',

  //   initialize: function() {
  //     app.reservations_list = new app.Reservations();

  //   }
  //   render: function() {

      for (var i = 0; i<28; i++){
        var seatView = new app.SeatView({model: { seat_number: i} } );
        seatView.render();
        $('.seat_boxes').append(seatView.$el);
      };

  //   }
  // })



  // app.createSeat = function(res) {
  //   console.log('create seat', res)

  //   var ids = _.pluck(res, 'seat_number');
  //   console.log(ids);
  //   $totalSeatNumber = (rows) * (colunms)

  //    for(var s=0; s<$totalSeatNumber+3; s++){
  //     $seat = ('<div class="seats"><p id="seat'+s+'">'+ s +'</p></div>');
  //     $reservedSeat = ('<div class="seats reserved"><p id="seat'+s+'">'+ s +'</p></div>');
  //     if (_.contains(ids, s + '')) {
  //       $('.seat_boxes').append($reservedSeat);
  //     } else {
  //       $('.seat_boxes').append($seat);
  //     }
  //   }
  // };

  // app.bookingSeat = function(event) {
  //   app.$clickedImg = $(event.target);
  //   app.$clickedImg.addClass('clicked');
  //   app.$seatNumber = app.$clickedImg.text();
  //   console.log(app.$seatNumber);
  //   var n = app.$seatNumber;
  //   app.showBookingDetails(n);
  //   $('#btnSave').show();

  //   // confirm('You choose seat No.' + seatNumber );
  // };


  // app.showBookingDetails = function(number){
  //   $bookingDetailsDiv = $('<div class="booking_details"/>');
  //   $bookingDetailsDiv.append($('<p id="booked_number"> Seat No. '+ number+' </p>'));
  //   // $btnSave = $('<button id="btn_save"> Book! </button>');

  //   $('.seat_details').append($bookingDetailsDiv);
  //   $('.seat_details').append($('#btnSave'));
  //   $bookingDetailsDiv.fadeIn();
  // }

  // app.seatReservation = function(event){
  //   $('.seats').removeClass('clicked').addClass('reserved');
  // }


  // app.saveSeat =function(){
  //        $.ajax({
  //         url: '/reservations',
  //         method: 'post',
  //         dataType: 'json'
  //         }).done(function(response) {
  //           console.log(response);

  //           // createSeat();
  //         });
  // }

  //     $.ajax({
  //         url: '/reservations',
  //         method: 'get',
  //         dataType: 'json'
  //       }).done(function(res) {
  //         console.log(res);
  //         app.createSeat(res);
  //      });

  // $('#btnSave').hide();

  // $('.seat_boxes').on('click', '.seats', app.bookingSeat);
  // $('#btnSave').on('click', app.seatReservation);
 }); //end of document ready