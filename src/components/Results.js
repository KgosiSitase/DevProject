// Importing everything necessary
import React from "react";
import { Card, Button } from "react-bootstrap";

// Component to display the search results
const Results = ({ results, addToFavorites }) => {
  return (
    <div>
      {/* Mapping over the results array to display each item */}
      {results.map((item) => (
        <Card key={item.trackId} className="mb-3">
          {/* Displaying the album cover image */}
          <Card.Img
            variant="top"
            src={item.artworkUrl100}
            alt={item.collectionName || item.trackName}
          />
          <Card.Body>
            <Card.Title>{item.collectionName || item.trackName}</Card.Title>
            <Card.Text>{item.artistName}</Card.Text>
            <Button variant="success" onClick={() => addToFavorites(item)}>
              Add to Favorites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Results;
