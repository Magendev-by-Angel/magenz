
const navBar = `import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	useColorModeValue,
	IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; 
import ThemeToggleButton from "./ThemeToggleButton";
import type { Router } from "next/dist/client/router"; //I use this import just to not use an any type
import LinkItem from "./LinkItem";

const NavBar = ({ path }: { path: string }) => {
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        bg="#20202380"
        style={{ backdropFilter: "blur(10px)" }}
      >
	  		<Container
				display="flex"
				p={2}
				maxW="container.md"
				flexWrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					w={{ base: "full", md: "auto" }}
					align="center"
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href="/" path={path}>
						Home
					</LinkItem>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
				</Stack>
				<Flex flex={1} justify="end">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Container>
		</Box>
    );
  };
  export default NavBar;
`;

module.exports = navBar