import { Box, Heading, Text, Flex, Button, UnorderedList, ListItem, Link} from "@chakra-ui/react";


export function Projects(){
    return (
        <Box color={"white"} fontFamily={"candara"}>
            <Heading id={"projects"} scrollBehavior={"smooth"} fontSize={"25px"} fontWeight={"bold"}>Projects:</Heading>

            <UnorderedList>
                <ListItem>

                    <Flex direction={["column", "row"]} gap={["15px", "15px", "50px"]} textAlign={"justify"} mt={"15px"}>

                        <Flex direction={"column"}>
                            <Text fontSize={"18px"}>Arithmetic Calculator</Text>
                            <Text mt={"10px"}>This was my first frontend project aimed at building a strong foundation. The goal was to learn key frontend concepts like HTML, CSS, and JavaScript by creating a functional calculator. I gained experience in responsive design, user input handling, and basic interactivity, marking the start of my frontend development journey.</Text>
                            <Text mt={"10px"} fontFamily={"candara light"}>Technologies used: HTML, CSS, Javascript.</Text>
                        </Flex>

                        <Flex direction={["row", "column"]} gap={["15px"]} w={["100%", "300px"]} maxW={"100%"} justify={"center"}>
                            <Link href="https://projeto-calculadora-nu.vercel.app" target="_blank">
                                <Button bgColor={"rgba(95, 95, 95, 0.8)"} w={"100%"}  color={"white"} transition={"0.5s"} _hover={{bgColor: "white", color: "rgba(95, 95, 95, 1)"}}>View mode</Button>
                            </Link>

                            <Link  href="https://github.com/erickcarpes/Projeto-Calculadora" target="_blank">
                                <Button bgColor={"rgba(95, 95, 95, 0.8)"} w={"100%"} color={"white"} transition={"0.5s"} _hover={{bgColor: "white", color: "rgba(95, 95, 95, 1)"}}>GitHub repository</Button>
                            </Link>
                        </Flex>

                    </Flex>

                </ListItem>

                <ListItem>

                    <Flex direction={["column", "row"]} gap={["15px", "15px", "50px"]} textAlign={"justify"} mt={"30px"}>

                        <Flex direction={"column"}>
                            <Text fontSize={"18px"}>Currency Conversor</Text>
                            <Text mt={"10px"}>This project was more complex than my previous calculator work, focusing on enhancing my frontend skills with features like state management and API integration. It gave me hands-on experience in fetching dynamic data from external sources.</Text>
                            <Text mt={"10px"} fontFamily={"candara light"}>Technologies used: HTML, CSS, Javascript, API's.</Text>
                        </Flex>

                        <Flex direction={["row", "column"]} gap={["15px"]} w={["100%", "300px"]} maxW={"100%"} justify={"center"}>
                            <Link href="https://currency-converter-navy-eight.vercel.app" target="_blank">
                                <Button bgColor={"rgba(95, 95, 95, 0.8)"} w={"100%"}  color={"white"} transition={"0.5s"} _hover={{bgColor: "white", color: "rgba(95, 95, 95, 1)"}}>View mode</Button>
                            </Link>

                            <Link  href="https://github.com/thenickfer/Currency-Converter" target="_blank">
                                <Button bgColor={"rgba(95, 95, 95, 0.8)"} w={"100%"} color={"white"} transition={"0.5s"} _hover={{bgColor: "white", color: "rgba(95, 95, 95, 1)"}}>GitHub repository</Button>
                            </Link>
                        </Flex>

                    </Flex>

                </ListItem>

                <ListItem>


                    <Flex direction={["column", "row"]} gap={["15px", "15px", "50px"]} textAlign={"justify"} mt={"30px"}>

                        <Flex direction={"column"}>
                            <Text fontSize={"18px"}>Movies and reviews database</Text>
                            <Text mt={"10px"}>This was my first backend project, where I built a movie review platform with CRUD functionality for users, reviews, and films. It involved creating APIs, managing a database, handling server-side logic, and understanding model relationships, improving my skills in database operations and full-stack architecture.</Text>
                            <Text mt={"10px"} fontFamily={"candara light"}>Technologies used: Typescript, Node.js, Prisma, MongoDB.</Text>
                        </Flex>

                        <Flex direction={["row", "column"]} w={["100%", "300px"]} maxW={"100%"} justify={"center"}>
                           
                            <Link  href="https://github.com/erickcarpes/Movies-Evaluations-BD" target="_blank">
                                <Button bgColor={"rgba(95, 95, 95, 0.8)"} w={"100%"} color={"white"} transition={"0.5s"} _hover={{bgColor: "white", color: "rgba(95, 95, 95, 1)"}}>GitHub repository</Button>
                            </Link>
                        </Flex>

                    </Flex>

                </ListItem>
            </UnorderedList>

        </Box>

    )
}