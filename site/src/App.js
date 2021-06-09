import {
  Box, ChakraProvider, Heading, HStack,
  Text, theme, VStack
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import React from 'react';

function App() {
  if (!isMobile) {
    return (

      <ChakraProvider theme={theme}>
        <VStack>
          <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="left" alignItems="left" p="10vw" h="100vh" w="100vw">

            <HStack>
              <img style={{ height: "auto", width: "20vw", position: "relative", left: "-5vw" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852270505528655912/output-onlinepngtools_1.png"></img>
              <img style={{ height: "auto", width: "15vw", position: "relative" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264877326467082/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.20.png?width=578&height=1251"></img>
              <img style={{ height: "auto", width: "15vw", position: "relative", left: "-5vw" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264856634916874/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.28.png?width=578&height=1251"></img>
              <VStack>
                <Heading>meet SF90</Heading>

                <Text>the first complete financial ecosystem built from the ground up with a focus on sustainability, ethics, and community.</Text>
                <Heading>coming soon.</Heading>
              </VStack>
            </HStack>

          </Box>
        </VStack>
      </ChakraProvider>
    );
  } else {
    return (

      <ChakraProvider theme={theme}>
        <VStack>
          <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="left" alignItems="left" p="10vw" h="100vh" w="100vw">

            <VStack>
              <img style={{ height: "auto", width: "100vw", position: "relative" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852270505528655912/output-onlinepngtools_1.png"></img>
              <VStack>
                <Heading>meet SF90</Heading>
                <Text>the first complete financial ecosystem built from the ground up with a focus on sustainability, ethics, and community.</Text>
                <Heading>coming soon.</Heading>
              </VStack>
              <img style={{ height: "auto", width: "100vw", position: "relative" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264877326467082/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.20.png?width=578&height=1251"></img>
              <img style={{ height: "auto", width: "100vw", position: "relative", top: "-60vh" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264856634916874/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.28.png?width=578&height=1251"></img>
            </VStack>

          </Box>
        </VStack>
      </ChakraProvider>
    );

  }
}

export default App;
