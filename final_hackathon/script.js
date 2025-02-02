document.getElementById('searchButton').addEventListener('click', function() {
    const title = document.getElementById('movieTitle').value;
    const apiKey = '7835c840'; // Replace with your actual OMDb API key

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`) // ✅ Fixed Template Literal
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          const movieDetails = `
            <h2>${data.Title} (${data.Year})</h2>
            <img src="${data.Poster}" alt="${data.Title} Poster" style="width:200px;">
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
          `;
          document.getElementById('movieDetails').innerHTML = movieDetails;
        } else {
          document.getElementById('movieDetails').innerHTML = '<p style="color:red;">Movie not found!</p>';
        }
      })
      .catch(error => {
        console.log('Error:', error);
        document.getElementById('movieDetails').innerHTML = '<p style="color:red;">Something went wrong! Please try again.</p>';
      });
});
