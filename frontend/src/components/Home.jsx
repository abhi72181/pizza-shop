import React, { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pizza from "./Pizza";
// import PizzaArr from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../store/getData/pizzaAction";

const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.getAllPizzas.getPizza);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  // console.log(datas)

  if (datas.loading == true) {
    <h1>loading...</h1>;
  } else if (datas.error == true) {
    <h1>something went wrong...</h1>;
  }
  return (
    <div>
      <br />
      <br />
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        style={{ width: "90%", margin: "auto" }}
      >
        {datas.data.map((e) => (
          <Pizza e={e} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
