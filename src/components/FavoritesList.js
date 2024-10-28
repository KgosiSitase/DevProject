// Importing everything necessary
import React from "react";
import { Card, Button } from "react-bootstrap";

// Component to display the list of favorite items
const FavoritesList = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favourites</h2>
      {/* Mapping over the favorites array to display each item */}
      {favorites.map((item) => (
        <Card key={item.trackId} className="mb-3">
          <Card.Body>
            <Card.Title>{item.collectionName || item.trackName}</Card.Title>
            <Button
              variant="danger"
              onClick={() => removeFromFavorites(item.trackId)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FavoritesList;
