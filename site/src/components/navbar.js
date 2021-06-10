import { Box, Flex, Heading } from "@chakra-ui/layout";

const NavBar = () => {
	return (
		<Box>
			<Flex justifyContent="center" alignItems="center" p="0.5em" maxH="10vh">
				<img alt="logo" style={{ height: "6vh", width: "auto" }} src="https://cdn.discordapp.com/attachments/692861972731002995/852270505528655912/output-onlinepngtools_1.png"></img>
				<Heading>SF90</Heading>
			</Flex>
		</Box>
	);
}

export default NavBar;