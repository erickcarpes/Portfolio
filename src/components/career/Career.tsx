import { Box, Flex, Heading, Text } from "@chakra-ui/react"

export function Career(){
    return (
        <Box color={"white"}>
                <Heading id={"career"} fontSize={"25px"} fontFamily={"candara"} fontWeight={"bold"}>Career:</Heading>

                <Flex mt={"15px"}direction={"column"} >

                        <Flex direction={["column", "column", "row"]} gap={["10px", "10px", "40px"]}>
                            <Text minW={"110px"} fontFamily={"candara"} color={"#C0BFBF"}>2025 - ?</Text>
        
                            <Flex direction={"column"}>
                               <Text fontFamily={"candara"}>Looking for my first oportunity.</Text>
                            </Flex>
                        </Flex>
                </Flex>
        </Box>
    )
}