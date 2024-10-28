// Importing everything necessary
import React from "react";
import { Form } from "react-bootstrap";

// Component for selecting the type of media to search for
const MediaTypeSelector = ({ media, onMediaChange }) => {
  return (
    <Form.Group>
      <Form.Control
        as="select"
        value={media}
        onChange={(e) => onMediaChange(e.target.value)}
      >
        {/* Dropdown options for different media types */}
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </Form.Control>
    </Form.Group>
  );
};

export default MediaTypeSelector;
