import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid gridTemplateAreas={{ base: `"navbar" "main" `, lg: `"navbar navbar" "sidebar main" ` }}>
        <GridItem area={"navbar"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
