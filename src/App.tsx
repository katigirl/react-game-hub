import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid gridTemplateAreas={{ base: `"navbar" "main" `, lg: `"navbar navbar" "sidebar main" ` }}>
        <GridItem area={"navbar"} bg="papayawhip">
          Nav
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
