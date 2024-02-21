import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box as={motion.div} whileHover={{ scale: 1.03 }} transition={"0.09s linear"} borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
