$.ajax({
    type: 'GET',
    url: 'https://swapi.dev/api/people/',
    success: function(response) {
      console.log(response);
    }
});
