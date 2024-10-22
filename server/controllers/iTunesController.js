// Use dynamic import to load node-fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// This function will handle the search requests to the iTunes API
exports.searchiTunes = async (req, res) => {
  const { term, media } = req.query;

  // If no search term is provided, respond with a 400 Bad Request status
  if (!term) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  try {
    // Make an HTTP GET request to the iTunes Search API using the fetch API
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media || 'all'}`);

    // Parse the JSON response from the iTunes API
    const data = await response.json();

    // Map the API results to extract relevant information about each item
    // Specifically, we're interested in the album/track name, artist name, album cover URL, and release date
    const albums = data.results.map((item) => ({
      albumName: item.collectionName || item.trackName, 
      artistName: item.artistName, 
      albumCover: item.artworkUrl100, 
      releaseDate: item.releaseDate, 
    }));

    // Send the processed list of albums back to the client as a JSON response
    res.json(albums);
  } catch (error) {
    // If an error occurs during the fetch or processing of the data, log the error to the console
    console.error('Error fetching data from iTunes API:', error);

    // Respond with a 500 Internal Server Error status and an error message
    res.status(500).json({ error: 'Failed to fetch data from iTunes API' });
  }
};