import { Box, Text, Grid, Flex, Heading } from "@chakra-ui/react"
<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
import { FaGitAlt } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";

export function Technologies(){
    return (
        <Box color={"white"}>
            
            <Heading id={"technologies"} fontSize={"25px"} fontFamily={"candara"} fontWeight={"bold"}>Technologies:</Heading>

            <Text mt={"15px"} fontFamily={"candara"} fontSize={"18px"}>Frontend</Text>

            <Grid mt={"15px"} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={"0.5rem"} h={"100%"}>

                <Box bg={"rgba(95, 95, 95, 0.5)"}  minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={["0.5rem", "1rem"]} borderRadius={"5px"}>
                    
                    <Text bg={"#7ee1fc26"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>React</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#007acc26"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"} >
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>Typescript</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#f0db4f26"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>Javascript</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#7ee1fc26"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Chakra UI</title><path fill="#319795" d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"/></svg>
                        </Flex>
                    </Text>
                    
                    <Text>Chakra UI</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#dd4b2526"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>HTML</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#264de426"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>CSS</Text>
                </Box>

            </Grid>

            <Text mt={"15px"} fontFamily={"candara"} fontSize={"18px"}>Backend</Text>

            <Grid mt={"15px"} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={"0.5rem"} h={"100%"}>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"rgba(228, 26, 26, 0.15)"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"7px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" width={"22px"}/>
                        </Flex>
                    </Text>
                    
                    <Text>Java</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#007acc26"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>Typescript</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#6fa66026"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>Node.js</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"rgba(156, 156, 156, 0.5)"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <SiPrisma color="black" size={"20px"}/>
                        </Flex>
                    </Text>
                    
                    <Text>Prisma</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"rgba(46, 205, 86, 0.1)"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width={"20px"}/>
                        </Flex>
                    </Text>
                    
                    <Text>MongoDB</Text>
                </Box>

            </Grid>

            <Text mt={"15px"} fontFamily={"candara"} fontSize={"18px"}>Tools</Text>

            <Grid mt={"15px"} templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={"0.5rem"} h={"100%"}>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#33abe326"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                        </Flex>
                    </Text>
                    
                    <Text>VS CODE</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"rgba(156, 156, 156, 0.5)"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"8px"}>
                        <Flex align={"center"} justify={"center"}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </Flex>
                    </Text>
                    
                    <Text>Github</Text>
                </Box>

                <Box bg={"rgba(95, 95, 95, 0.5)"} minW={"120px"} maxW={"256px"} h={"60px"} p={"12px"} display={"flex"} alignItems={"center"} gap={"1rem"} borderRadius={"5px"}>
                    
                    <Text bg={"#dd4b2526"} w={"36px"} h={"36px"} borderRadius={"10px"} p={"7px"}>
                        <Flex align={"center"} justify={"center"} >
                            <FaGitAlt size={"23px"} color="red"/></Flex>
                    </Text>
                    
                    <Text>Git</Text>
                </Box>

            </Grid>

        </Box>
    )
}