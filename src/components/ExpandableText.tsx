import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxChar = 200;

  if (!children) {
    return null;
  }

  if (children.length <= maxChar) {
    return <Text>{children}</Text>;
  }

  const text = expanded ? children : children.substring(0, maxChar) + "...";

  return (
    <>
      <Text>
        {text}
        <Button size="xs" fontWeight="bold" colorScheme="teal" marginLeft={1} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
