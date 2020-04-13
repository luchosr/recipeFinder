import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from "react-bootstrap";

function SearchRecipes() {
  const [ingredients, setIngredients] = useState("");
  const [dish, setDish] = useState("");

  function search() {
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log("dish ", dish, "ingredients ", ingredients, "url ", url);

    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(" recipes ", json));
  }

  return (
    <Form inline>
      <FormGroup>
        <ControlLabel>Ingredients</ControlLabel>{" "}
        <FormControl
          type="text"
          placeholder="garlic, chicken"
          onChange={(event) => setIngredients(event.target.value)}
        />
      </FormGroup>{" "}
      <FormGroup>
        <ControlLabel>Dish</ControlLabel>{" "}
        <FormControl
          type="text"
          placeholder="adobo"
          onChange={(event) => setDish(event.target.value)}
        />
      </FormGroup>
      <Button onClick={() => search()}>Submit</Button>
    </Form>
  );
}

export default SearchRecipes;
