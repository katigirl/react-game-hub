import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup marginX={5}>
      <InputLeftElement>
        <SearchIcon color="gray.400" />
      </InputLeftElement>
      <Input borderRadius={20} placeholder="Search games..." variant="filled" size="md" type="search" />;
    </InputGroup>
  );
};

export default SearchInput;
