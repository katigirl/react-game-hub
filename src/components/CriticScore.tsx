import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <>
      {
        <Badge
          variant="subtle"
          colorScheme={score > 80 ? "green" : score > 60 ? "yellow" : ""}
          fontSize={{ sm: "xl", lg: "lg" }}
          paddingX={2}
          borderRadius="5px"
        >
          {score}
        </Badge>
      }
    </>
  );
};

export default CriticScore;
