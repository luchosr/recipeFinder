import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";

function SearchRecipes() {
  return (
    <Form inline>
      <FormGroup>
        <ControlLabel>Ingredients</ControlLabel>{" "}
        <FormControl type="text" placeholder="garlic, chicken" />
      </FormGroup>{" "}
      <FormGroup>
        <ControlLabel>Dish</ControlLabel>{" "}
        <FormControl type="text" placeholder="adobo" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default SearchRecipes;
