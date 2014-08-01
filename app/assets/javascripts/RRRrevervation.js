var rows = 5;
var colunms = 5;
var app = {};

$(document).ready(function(){

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
    app.$clickedImg = $(event.target);
    app.$clickedImg.addClass('clicked');
    app.$seatNumber = app.$clickedImg.text();
    console.log(app.$seatNumber);
    var n = app.$seatNumber;
    app.showBookingDetails(n);
    $('#btnSave').show();

    // confirm('You choose seat No.' + seatNumber );
  };


  app.showBookingDetails = function(number){
    $bookingDetailsDiv = $('<div class="booking_details"/>');
    $bookingDetailsDiv.append($('<p id="booked_number"> Seat No. '+ number+' </p>'));
    // $btnSave = $('<button id="btn_save"> Book! </button>');

    $('.seat_details').append($bookingDetailsDiv);
    $('.seat_details').append($('#btnSave'));
    $bookingDetailsDiv.fadeIn();
  }

  app.seatReservation = function(event){
    app.$clickedImg.removeClass('clicked').addClass('reserved');
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

  $('#btnSave').hide();

  $('.seat_boxes').on('click', '.seats', app.bookingSeat);
  $('#btnSave').on('click', app.seatReservation);
 }); //end of document ready