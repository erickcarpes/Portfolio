import { Box, Heading, Text, Flex, Link} from "@chakra-ui/react"
import { keyframes } from "@emotion/react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const gradientAnimation = keyframes`
   0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%; 
  }
  100% {
    background-position: 200% 50%; 
  }
`;

export function Header(){
    return (
            <Box>
                <Flex direction={"row"} justify={"space-between"}>

                    <Box color={"white"}>
                        <Flex direction={"column"} alignItems={"flex-start"} gap="0.3rem">

                            <Heading color="transparent" fontSize={"27px"} fontFamily={"candara"} bgClip={"text"} bgGradient="linear(to right, #61B7CD, #4093A8)" bgSize={"200% 200%"} animation={`${gradientAnimation} 2s infinite`} display="inline-flex">Erick Carpes</Heading>
                     
                            <Text fontFamily={"candara"}>Software Engineer</Text>

                            <Flex direction={"row"} gap={"10px"} align={"center"} justify={"center"} mt={"3px"}>
                                <FaGlobeAmericas color="rgb(161 161 170)"/>
                                <Text as="span" fontSize={"13px"} fontFamily={"candara light"} color="rgb(161 161 170)">Porto Alegre, RS, Brazil</Text>
                            </Flex>
                        
                            <Flex gap="8px" mt={"5px"}>

                                <Link href="https://www.linkedin.com/in/erick-carpes-8394b2329/" isExternal bg={"rgba(18, 40, 58, 1)"} w={"40px"} h={"40px"} p={"0px"} rounded={"6px"} display={"flex"} alignItems={"center"} justifyContent={"center"} _hover={{color: "white"}}>        
                                    <Box as={FaLinkedin} w={"40px"} h={"40px"} p={"9px"} color="rgb(161 161 170)" transition={"0.3"} _hover={{fill: "white"}}></Box>
                                </Link>

                                <Link href="https://github.com/erickcarpes" isExternal bg={"rgba(18, 40, 58, 1)"} w={"40px"} h={"40px"} p={"0px"} rounded={"6px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>        
                                    <Box as={FaGithub} w={"40px"} h={"40px"} p={"9px"} color="rgb(161 161 170)" transition={"0.3"} _hover={{fill: "white"}}></Box>
                                </Link>

                            </Flex>
                        </Flex>
                    </Box>

                    <Box w={"136px"} h={"136px"} borderRadius={"50%"} overflow={"hidden"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <img src="/perfil.png" alt=""/>
                    </Box>
                </Flex>
        
            </Box>
    )
}