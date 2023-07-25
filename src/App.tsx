import {
  Divider,
  Flex,
  Image,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
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
        <SectionDivider title="What is it?" number={"01"}>
          <>
            <Flex
              justify={"space-between"}
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
        <SectionDivider title="Origins" number={"02"}>
          <Flex>
            <Text
              // w={600}
              alignSelf={"center"}
              textAlign={"center"}
              fontSize={{ base: 18, md: 23 }}
            >
              The concept of subscription based services dates back to as early
              as 1860 when milkmen deliveries in the UK allowed people to
              subscribe to regular milk deliveries. Over the years, this model
              evolved and expanded into various industries, shaping the way we
              interact with products and services.
            </Text>
          </Flex>
        </SectionDivider>
        <SectionDivider title="Where it is today" number="03">
          <>
            <VStack alignSelf={"start"}>
              <Flex alignSelf={"start"} flexDir={"column"}>
                <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                  TV Industry
                </Text>
                <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
              </Flex>
              <Text
                w={500}
                mt={4}
                // textAlign={"center"}
                fontSize={{ base: 18, md: 23 }}
              >
                One of the most prominent examples of subscription based
                services in the TV industry is Netflix. Established in 1997,
                Netflix played a pioneering role in popularizing this business
                model. By offering a vast library of movies, series, and
                documentaries for a monthly fee, Netflix revolutionized the way
                people consumed news and entertainment.
              </Text>
            </VStack>
            <VStack mt={20} alignSelf={"end"}>
              <Flex alignSelf={"end"} flexDir={"column"}>
                <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                  Shopping Industry
                </Text>
                <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
              </Flex>
              <Text
                w={500}
                mt={4}
                textAlign={"right"}
                fontSize={{ base: 18, md: 23 }}
              >
                The rise of online shopping has also been shaped by subscription
                based services. Amazon, for instance, introduced its Prime
                membership, providing customers with faster shipping on select
                items, along with additional benefits like access to streaming
                content. Moreover, the emergence of meal prep subscriptions,
                such as HelloFresh, has streamlined the way we shop for
                groceries and cook at home.
              </Text>
            </VStack>
            <VStack mt={20} alignSelf={"start"}>
              <Flex alignSelf={"start"} flexDir={"column"}>
                <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                  Music Industry
                </Text>
                <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
              </Flex>
              <Text
                w={500}
                mt={4}
                // textAlign={"center"}
                fontSize={{ base: 18, md: 23 }}
              >
                Subscription based models have completely transformed the music
                industry. Services like Spotify, Apple Music, and Pandora have
                eliminated the need to purchase individual songs, offering users
                unlimited access to a vast library of music for a fixed monthly
                price. This shift has made music consumption more affordable and
                convenient.
              </Text>
            </VStack>
            <VStack mt={20} alignSelf={"end"}>
              <Flex alignSelf={"end"} flexDir={"column"}>
                <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                  Video Game Industry
                </Text>
                <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
              </Flex>
              <Text
                w={500}
                mt={4}
                textAlign={"right"}
                fontSize={{ base: 18, md: 23 }}
              >
                In the gaming world, subscription based services have had a
                significant impact. Platforms like Xbox Live required users to
                pay a monthly fee to play with friends and access exclusive
                content. However, Google entered the scene with a subscription
                model that allowed gamers to pay one fee for unlimited access to
                games. While this created direct competition with Xbox and
                Playstation, it also faced its share of challenges.
              </Text>
            </VStack>
          </>
        </SectionDivider>
        <SectionDivider number="04" title="Challenges">
          <>
            <Flex justify={"space-between"}>
              <Text
                alignSelf={"center"}
                w={500}
                fontSize={{ base: 18, md: 23 }}
              >
                Subscriptions based services has brought both positive and
                negative consequences for consumers and businesses alike. On the
                one hand, customers now have to make educated decisions on
                whether subscribing to a service is worth it, as the cumulative
                cost of multiple subscriptions can lead to subscription fatigue
                and financial strain.
              </Text>
              <Image
                w={500}
                borderRadius={13}
                src={require("./assets/frustrated.png")}
              />
            </Flex>
            <Flex mt={40} justify={"space-between"}>
              <Image
                bg="white"
                w={500}
                borderRadius={13}
                src={require("./assets/fragmentation.png")}
              />
              <VStack alignSelf={"end"}>
                <Flex alignSelf={"end"} flexDir={"column"}>
                  <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                    Content Fragmentation
                  </Text>
                  <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
                </Flex>
                <Text
                  w={500}
                  mt={4}
                  textAlign={"end"}
                  fontSize={{ base: 18, md: 23 }}
                >
                  Content fragmentation is another challenge, as users may need
                  to subscribe to multiple services to access all the content
                  they desire. This can make it challenging to find and enjoy
                  specific content easily.
                </Text>
              </VStack>
            </Flex>
            <Flex mt={40} justify={"space-between"}>
              <VStack  alignSelf={"start"}>
                <Flex alignSelf={"start"} flexDir={"column"}>
                  <Text zIndex={1} fontWeight={"700"} fontSize={40}>
                    Ease of Access
                  </Text>
                  <Flex bg="#BF9548" w={"100%"} h={5} mt={-7} zIndex={0} />
                </Flex>
                <Text
                  w={500}
                  mt={4}
                  textAlign={"start"}
                  fontSize={{ base: 18, md: 23 }}
                >
                  On the flip side, subscription based services offer
                  convenience and accessibility, allowing users to enjoy a wide
                  range of products and content from the comfort of their homes.
                  For businesses, this shift requires a focus on fostering
                  long-term customer relationships and building loyalty, as
                  maintaining subscriptions requires ongoing value and
                  engagement.
                </Text>
              </VStack>
              <Image
                bg="#BF9548"
                w={500}
                borderRadius={13}
                src={require("./assets/relaxing.png")}
              />
            </Flex>
          </>
        </SectionDivider>
        <SectionDivider number="05" title="Conclusion">
          <Text   alignSelf={"center"}
              textAlign={"center"}
              fontSize={{ base: 18, md: 23 }}>
            In conclusion, subscription based services have significantly shaped
            today's society, influencing how we consume various products and
            content. This model has its benefits and challenges, and as
            technology continues to advance, it will be fascinating to observe
            how subscription services evolve further and continue to impact our
            lives.
          </Text>
        </SectionDivider>
      </Flex>
    </>
  );
};

export default App;
