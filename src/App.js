// Importing everything necessary
import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import MediaTypeSelector from "./components/MediaTypeSelector";
import Results from "./components/Results";
import FavoritesList from "./components/FavoritesList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  // State to manage the search term
  const [term, setTerm] = useState("");

  // State to manage the selected media type
  const [media, setMedia] = useState("all");

  // State to manage the search results
  const [results, setResults] = useState([]);

  // State to manage the list of favorite items
  const [favorites, setFavorites] = useState([]);

  // Function to handle the search operation
  const onSearch = async () => {
    // Making a GET request to the iTunes Search API
    const response = await axios.get(
      `https://itunes.apple.com/search?term=${term}&media=${media}`
    );

    // Updating the state with the search results
    setResults(response.data.results);
  };

  // Function to add an item to the favorites list
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  // Function to remove an item from the favorites list
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.trackId !== id));
  };

  return (
    <Container className="container">
      <h1 className=" header text-center my-4">iTunes Search App</h1>
      <Row className="mb-3">
        {/* Search bar for entering the search term */}
        <Col md={8}>
          <SearchBar term={term} onTermChange={setTerm} onSearch={onSearch} />
        </Col>

        {/* Dropdown for selecting the type of media */}
        <Col md={4}>
          <MediaTypeSelector media={media} onMediaChange={setMedia} />
        </Col>
      </Row>
      <Row>
        {/* Displaying the search results */}
        <Col md={8}>
          <Results results={results} addToFavorites={addToFavorites} />
        </Col>

        {/* Displaying the list of favorite items */}
        <Col md={4}>
          <FavoritesList
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        </Col>
      </Row>

      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </Container>
  );
};

export default App;
