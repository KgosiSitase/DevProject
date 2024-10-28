// Importing everything necessary
import React from "react";
import { Form, Button } from "react-bootstrap";

// Component for the search input and button
const SearchBar = ({ term, onTermChange, onSearch }) => {
  return (
    <Form inline>
      <Form.Control
        type="text"
        value={term}
        onChange={(e) => onTermChange(e.target.value)}
        placeholder="Enter search term"
        className="mr-sm-2"
      />
      <Button variant="primary" onClick={onSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
