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
                            <Text mt={"10px"}>This was my first project focused on frontend development, created with the goal of laying a strong foundation in this area. The main objective was to familiarize myself with essential frontend concepts, such as HTML, CSS, and JavaScript, while building a functional calculator. Through this project, I gained practical experience in creating responsive layouts, handling user input, and implementing basic interactivity. This project marked the beginning of my journey in frontend development, providing a solid base to continue improving and evolving.</Text>
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
                            <Text mt={"10px"}>This project was a step up in complexity compared to my previous work with a calculator. The primary goal was to deepen my understanding of frontend development by tackling more challenging features, such as state management and responsive design. Additionally, this was my first exposure to working with APIs, which allowed me to gain hands-on experience in fetching and integrating dynamic data from external sources.</Text>
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
                            <Text mt={"10px"}>This project was my first backend experience, focused on building a movie review platform with CRUD functionality for users, reviews, and films. The project involved creating APIs, managing a database, and handling server-side logic. It also helped me understand how to manage relationships between models, while improving my skills in database operations and full-stack architecture.</Text>
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