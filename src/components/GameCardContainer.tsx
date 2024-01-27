import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={{ md: "380px", lg: "300px", xl: "230px" }} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
