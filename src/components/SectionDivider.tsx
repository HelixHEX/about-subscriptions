import { HStack, Divider, Flex, Text } from "@chakra-ui/react";
import Number from "./Number";
import { ReactElement } from "react";

const SectionDivider = ({
  number,
  title,
  children,
}: {
  number: string;
  children: ReactElement;
  title: string
}) => {
  return (
    <Flex mt={10} minH="100vh" h="auto" flexDir={"column"}>
      <HStack mt={3}>
        <Divider bg="gray.800" />
        <Number number={number} />
        <Divider bg="gray.800" />
      </HStack>
      <Text
            mt={10}
            fontWeight="800"
            fontSize={40}
            alignSelf={"center"}
            color="gray.800"
          >
            {title}
          </Text>
      <Flex w='100%' h='100%' flexDir={'column'} alignSelf={'center'}>
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionDivider;
