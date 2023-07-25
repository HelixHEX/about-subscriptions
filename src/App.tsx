import { Divider, Flex, HStack, Text } from "@chakra-ui/react";
import UmbrellaSVG from "./components/UmbrellaSVG";

const App = () => {
  return (
    <>
      <Flex
        fontFamily={"changa"}
        color="gray.800"
        flexDir={"column"}
        p={20}
        w="100%"
        minH="100vh"
        h="auto"
        bg="#E2D4BA"
      >
        <Flex h="100vh" flexDir={"column"}>
          <HStack spacing={8}>
            <Divider bg="gray.800" />
            <Text fontSize={25} fontWeight={"500"} w={550}>
              By: Elias Wambugu
            </Text>
            <Divider bg="gray.800" />
          </HStack>
          <Flex mt={300}>
            <Text alignSelf={"center"} w={700} fontSize={60} fontWeight={"800"}>
              How <span style={{ color: "#BF9548" }}>subscription</span> based
              services have shaped today's society{" "}
            </Text>
            <Flex flexDir={"column"}>
              <Flex>
                <UmbrellaSVG />
                <UmbrellaSVG />
                <UmbrellaSVG />
              </Flex>
              <Flex>
                <UmbrellaSVG />
                <UmbrellaSVG />
                <UmbrellaSVG />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
