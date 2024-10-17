import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid } from "@chakra-ui/react"
import { keyframes } from "@emotion/react";

const shineAnimation = keyframes`
   0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%; 
  }
`;

export function Navigation(){
    return (
        
        <Breadcrumb separator={""} fontFamily={"candara"} fontSize={[ "16px", "17px"]} maxW={"100vw"} display="flex" justifyContent={["center", "left"]} flexWrap={"wrap"}>


            <BreadcrumbItem color="transparent" scrollBehavior={"smooth"} bgClip="text" bgGradient="linear(to right, #FFFFFF, #828282)" bgSize="200% 200%" transition="background-position 1s ease" _hover={{animation: `${shineAnimation} 2s ease infinite`}} _focus={{ outline: "none" }} >
                <BreadcrumbLink href="#aboutMe">About Me</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="transparent" bgClip="text" bgGradient="linear(to right, #FFFFFF, #828282)" bgSize="200% 200%" transition="background-position 1s ease" _hover={{animation: `${shineAnimation} 2s ease infinite`}} _focus={{ outline: "none" }}>
                <BreadcrumbLink href="#career">Career</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="transparent" bgClip="text" bgGradient="linear(to right, #FFFFFF, #828282)" bgSize="200% 200%" transition="background-position 1s ease" _hover={{animation: `${shineAnimation} 2s ease infinite`}} _focus={{ outline: "none" }}>
                <BreadcrumbLink href="#technologies">Technologies</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="transparent" bgClip="text" bgGradient="linear(to right, #FFFFFF, #828282)" bgSize="200% 200%" transition="background-position 1s ease" _hover={{animation: `${shineAnimation} 2s ease infinite`}} _focus={{ outline: "none" }}>
                <BreadcrumbLink href="#projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>

        </Breadcrumb>
    )
}