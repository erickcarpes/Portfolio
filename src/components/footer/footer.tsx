import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Box, Text, Flex, Button, Link } from "@chakra-ui/react";

export function Footer(){

    function calculateDaysUntilBirthday() {

        const today = new Date();
        const birthYear = 2005;
        const birthMonth = 11;
        const birthDay = 6;

        const currentYear = today.getFullYear();
        const nextAge = currentYear - birthYear;

        let nextBirthday = new Date(currentYear, birthMonth, birthDay)

        if(today.getTime() > nextBirthday.getTime()){
            nextBirthday.setFullYear(currentYear+1);
        }

        const diffTime = nextBirthday.getTime() - today.getTime();
        const diffDays = Math.ceil((diffTime) / (1000*60*60*24));

        return (diffDays + " days until "+ nextAge +"/yo!")
    }

    return (
        <Flex direction={"column"} bgColor={"rgba(95, 95, 95, 0.8)"} color={"white"} fontFamily={"candara light"} fontSize={"14px"} gap={"0px"} w={"100%"} mt={"2rem"} px={"1rem"} pt={"0.2rem"} pb={"0.5rem"} border={"1px solid white"} borderBottom={"none"} borderTopLeftRadius={"30px"} borderTopRightRadius={"30px"}>

            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={"10px"}>

                <Link href="https://wa.me/5551997800055?" target="_blanck">
                    <Button bg={"transparent"} borderRadius={"30%"} transition={"0.3s"} p={"5px"} _hover={{bgColor: "rgba(37,211,102, 0.8)"}}>
                        <FaWhatsapp color="white" size={"22px"} />
                    </Button>
                </Link>

                <Link href="https://www.instagram.com/erickcarpes/" target="_blank">
                    <Button bg={"transparent"} borderRadius={"30%"} transition={"0.3s"} p={"5px"} _hover={{bgColor: "rgba(228,64,95, 0.8)"}}>
                        <FaInstagram color="white" size={"22px"} />
                    </Button>
                </Link>

                <Link href="https://www.linkedin.com/in/erick-carpes-8394b2329/" target="_blanck">
                    <Button bg={"transparent"} borderRadius={"30%"} transition={"0.3s"} p={"5px"} _hover={{bgColor: "rgba(10,102,194, 0.8)"}}>
                        <FaLinkedin color="white" size={"22px"} />
                    </Button>
                </Link>
            </Box>

            <Flex justifyContent={"space-between"} gap={"20px"}>
                <Text textAlign={"left"}>© {new Date().getFullYear()} - Erick Carpes</Text>
                <Text textAlign={"right"}>{calculateDaysUntilBirthday()}</Text>
            </Flex>
        </Flex> 
    )
}