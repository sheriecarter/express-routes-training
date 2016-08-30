
$(document).ready(function(){
  $('#artworkForm').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/artworks',
      method: 'POST',
      data: $('#artworkForm').serialize(),
      success: handleNewArtworkSuccess,
      error: handleError
    });
  });

  function handleNewArtworkSuccess(newArtworkResponse){
    console.log(newArtworkResponse);
  }

  function handleError(jqXHR, status, error){
    console.log('error:', error);
  }
});
