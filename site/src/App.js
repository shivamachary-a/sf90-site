import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Box textAlign="center" fontSize="xl" position="relative" display="flex" justifyContent="left" alignItems="left" p="10vw" h="100vh" w="100vw">

          <HStack>
            <img style={{ height: "auto", width: "20vw", position: "relative", left: "-5vw" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852270505528655912/output-onlinepngtools_1.png"></img>
            <img style={{ height: "auto", width: "15vw", position: "relative" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264877326467082/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.20.png?width=578&height=1251"></img>
            <img style={{ height: "auto", width: "15vw", position: "relative", left: "-5vw" }} alt="" src="https://media.discordapp.net/attachments/692861972731002995/852264856634916874/Simulator_Screen_Shot_-_iPhone_12_Pro_Max_-_2021-06-09_at_20.15.28.png?width=578&height=1251"></img>
            <VStack>
              <Heading>meet sf90</Heading>
              <Text>save money, spend freely and invest, with our tech-first, cloud based challenger bank and trading services.</Text>
              <Text>whether you're a day trader, quant, developer, or just looking for a modern, seamless banking and investing experience, we've got you.</Text>
              <Heading>coming soon.</Heading>
            </VStack>
          </HStack>

        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
