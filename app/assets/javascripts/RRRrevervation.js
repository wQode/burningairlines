var rows = 5;
var colunms = 5;
var app = {};

$(document).ready(function(){

  // console.log('isdifjsf');
  // var showFlight = function(){
  //   $.ajax({
  //       url: '/flights',
  //       method: 'get',
  //       dataType: 'json'
  //     ).done(function(res) {
  //       console.log(res);
  //     });
  //  };


  app.createSeat = function(res) {
    console.log('create seat', res)

    var ids = _.pluck(res, 'seat_number');
    console.log(ids);
    $totalSeatNumber = (rows) * (colunms)

     for(var s=0; s<$totalSeatNumber+3; s++){
      $seat = ('<div class="seats"><p id="seat'+s+'">'+ s +'</p></div>');
      $reservedSeat = ('<div class="seats reserved"><p id="seat'+s+'">'+ s +'</p></div>');
      if (_.contains(ids, s + '')) {
        $('.seat_boxes').append($reservedSeat);
      } else {
        $('.seat_boxes').append($seat);
      }
    }
  };

  app.bookingSeat = function(event) {
    var $clickedImg = $(event.target);
    $clickedImg.addClass('reserved');
    app.$seatNumber = $clickedImg.text();
    console.log(app.$seatNumber);

    var n = app.$seatNumber;
    app.showBookingDetails(n);

    // confirm('You choose seat No.' + seatNumber );
  };


  app.showBookingDetails = function(number){
    $bookingDetailsDiv = $('<div class="booking_details"/>');
    $bookingDetailsDiv.append($('<p id="booked_number"> Seat No. '+ number+' </p>'));
    $btnSave = $('<button id="btn_save"> Book! </button>');
    $bookingDetailsDiv.append($btnSave);
    $('.seat_details').append($bookingDetailsDiv);
    $bookingDetailsDiv.fadeIn();
  }


  app.saveSeat =function(){
         $.ajax({
          url: '/reservations',
          method: 'post',
          dataType: 'json'
          }).done(function(response) {
            console.log(response);

            // createSeat();
          });
  }

      $.ajax({
          url: '/reservations',
          method: 'get',
          dataType: 'json'
        }).done(function(res) {
          console.log(res);
          app.createSeat(res);
       });

  $('.seat_boxes').on('click', '.seats', app.bookingSeat);

 }); //end of document ready