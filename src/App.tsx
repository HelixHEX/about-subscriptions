import { Divider, Flex, Image, HStack, Stack, Text } from "@chakra-ui/react";
import UmbrellaSVG from "./components/UmbrellaSVG";
import SectionDivider from "./components/SectionDivider";

const App = () => {
  return (
    <>
      <Flex
        fontFamily={"changa"}
        color="gray.800"
        flexDir={"column"}
        p={{ base: 5, md: 20 }}
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
          <Stack direction={{ base: "column", md: "row" }} mt={300}>
            <Text
              alignSelf={"center"}
              w={{ base: "100%", md: 700 }}
              fontSize={{ base: 40, md: 60 }}
              fontWeight={"800"}
            >
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
          </Stack>
        </Flex>
        <SectionDivider title="What is it" number={"01"}>
          <>
            <Flex
              justify={"space-between"}
              mt={10}
              flexDir={{ base: "column", md: "row" }}
              w="100%"
            >
              <Flex
                borderWidth={8}
                w={{ base: 300, md: 450 }}
                h={{ base: 200, md: 350 }}
                borderRadius={20}
                borderColor={"black"}
              >
                <Image
                  w="100%"
                  borderRadius={13}
                  src={require("./assets/pricing-table.png")}
                />
              </Flex>
              <Text
                w={600}
                alignSelf={"center"}
                textAlign={"center"}
                fontSize={{ base: 18, md: 23 }}
              >
                Subscription based services have become an important part of our
                society, offering a business model where customers pay a
                recurring fee in exchange for access to a product, service, or
                content for a specific period of time. This model allows
                customers to enjoy various offerings without having to commit to
                a one-time purchase. By subscribing, users gain the convenience
                of continuous access and updates, making it a popular choice in
                today's world.
              </Text>
            </Flex>
          </>
        </SectionDivider>
        
      </Flex>
    </>
  );
};

export default App;
