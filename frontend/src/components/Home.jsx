import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pizza from "./Pizza";
import PizzaArr from "../pizza-data";
const Home = () => {
  return (
    <div>
      <br />
      <br />
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        style={{ width: "90%", margin: "auto" }}
      >
        {PizzaArr.map((e) => (
          <Pizza e={e} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
