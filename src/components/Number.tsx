import { Flex, Text } from "@chakra-ui/react"

const Number = ({number}: {number: string}) => {
  return (
    <>
    <Flex p={5} borderRadius={'100%'} borderWidth={2} borderColor={'#BF9548'}>
      <Text fontSize={20} fontWeight={"800"}>
        {number}
      </Text>
    </Flex>
    </>
  )
}

export default Number