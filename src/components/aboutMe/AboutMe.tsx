import { Heading, Text, Box, Flex } from "@chakra-ui/react"

export function AboutMe(){
    return (
        <Box color={"white"}>
            <Flex direction={"column"} gap="2rem">

                <Box>
                    <Heading id={"aboutMe"} fontSize={"25px"} fontFamily={"candara"} fontWeight={"bold"}>Who am I?</Heading>
                    <Text mt="15px" textAlign={"justify"} fontFamily={"candara light"} fontSize={"17px"}>Hello, I’m Erick Carpes, an 18-year-old Software Engineering student with a passion for technology and a background in competitive sailing. My journey as an athlete since the age of 8 has instilled in me key qualities like discipline, resilience, and dedication: traits that I carry into my approach to software development. </Text> 
                    
                    <Text mt={"15px"} textAlign={"justify"} fontFamily={"candara light"} fontSize={"17px"}>While still early in my academic career, I’ve already begun improving my skills in various programming languages and frameworks, consistently pushing myself to learn more. I’m particularly motivated by challenges that allow me to combine logic, creativity, and innovation to build effective solutions. Whether it’s a complex algorithm or an intuitive user interface, I bring a mindset of continuous improvement and adaptability to everything I do. </Text>
                    
                </Box>

                <Box>
                    <Heading  fontSize={"25px"} fontFamily={"candara"} fontWeight={"bold"}>Education:</Heading>

                    <Flex mt="15px" direction={"column"}>

                        <Flex direction={["column", "column", "row"]} gap={["10px", "10px", "40px"]}>
                            <Text minW={"110px"} fontFamily={"candara"} color={"#C0BFBF"}>2024 - Present</Text>
                            
                            <Flex direction={"column"}>
                                <Text fontFamily={"candara"}>Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</Text>
                                <Text fontFamily={"candara light"} mt={"5px"} textAlign={"justify"}>BSc in Software Engineering, focusing on software development, data structures, algorithms, and project management. </Text>
                            </Flex>
                        </Flex>

                    </Flex>
                </Box>

            
            </Flex>
        </Box>
    )
}