import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState(0);
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"navbar" "main" `,
          lg: `"navbar navbar" "sidebar main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"navbar"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"} paddingX={3}>
            <GenreList onFilter={(filter) => setFilter(filter)} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid filter={filter} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
