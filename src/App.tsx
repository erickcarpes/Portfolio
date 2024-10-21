import { Header } from './components/header/Header';
import { Navigation } from './components/navigation/Navigation';
import { AboutMe } from './components/aboutMe/AboutMe';
//import { Career } from './components/career/Career';
import { Technologies } from './components/technologies/Technologies';
import { Projects } from './components/projects/Projects';
import { Footer

 } from './components/footer/footer';
import { Box, Flex, Divider} from '@chakra-ui/react';          


function App() {
  return <div className="App">
      <Box position={"fixed"} zIndex={-1} scrollBehavior={"smooth"} overflowY={'scroll'} bgGradient={"radial(ellipse 80% 80% at 50% -45%, rgba(52, 73, 94, 0.9), #12283A)"} w="100vw" h="100vh" >
        
        <Flex direction={"column"} pt="2rem" maxW={"48rem"} mx="auto" gap="2rem" px={"1rem"}>
          <Header />   
          <Navigation />
          <AboutMe />
          <Divider />
          <Technologies />
          <Divider />
          <Projects />
        </Flex>
      
        <Footer />

      </Box>
  </div>;
}

export default App
