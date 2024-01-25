import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid gridTemplateAreas={{ base: `"navbar" "main" `, lg: `"navbar navbar" "sidebar main" ` }}>
        <GridItem area={"navbar"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"} bg="tomato">
            Sidebar
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
