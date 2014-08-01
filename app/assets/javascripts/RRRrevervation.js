
$(document).ready(function(){


var showFlight = function(){

  var flight_name = $('#flight_name').val();
  var flight_origin = $('#flight_origin').val();
  var flight_destination = $('#flight_destination').val();
  var flight_date = $('#flight_date').val();


  $.ajax({
      url: '/flights',
      method: 'post',
      dataType: 'json',
      data: {
        name: flight_name,
        origin: flight_origin,
        destination: flight_destination,
        date: flight_date
      },
      success: function(response) {

        console.log('whthe hfoidsl');

        $flight_name = $('<p>'+ flight_name +'</p>');
        $

};


 }); //end of document ready