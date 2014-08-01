
$(document).ready(function(){

  $.ajax({
            url: '/flight/',
            method: 'post',
            dataType: 'json',
            data: {
                id: $currentGameId
            },
            success: function(response) {

});