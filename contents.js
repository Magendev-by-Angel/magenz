const theme = `import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		disableTransitionOnChange: false,
	},
});`;

const navBar = `import {Box} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";

const NavBar = ({ path }: { path: string }) => {
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={1}
        bg="#20202380"
        style={{ backdropFilter: "blur(10px)" }}
      ></Box>
    );
  };
  export default NavBar;
`;

const toggleButton = `import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineWbSunny as SunIcon } from "react-icons/md";
import { BsMoonStarsFill as MoonIcon } from "react-icons/bs";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<IconButton
			aria-label="Toggle theme"
			colorScheme={useColorModeValue("purple", "orange")}
			icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
			onClick={toggleColorMode}
			borderRadius="full"
			zIndex={10}
		/>
	);
};

export default ThemeToggleButton;
`;
const lib = `import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		disableTransitionOnChange: false,
	},
});
`;
const _app = `import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/main";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Main router={router} title={Component.name}>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	);
}

export default MyApp;
`;

const _document = `import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default function Document() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}`;
const notFound = `import { Box } from "@chakra-ui/react";

const notFound = () => {
	return <Box>Page not found</Box>;
};

export default notFound;
`;
const index = `import { Box } from "@chakra-ui/react";

const Home = () => {
	return <Box>indexPage</Box>;
};
export default Home;`;
const eslint = `{
	"root": true,
	"extends": "next",
	"rules": {
		"no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_"
			}
		]
	}
}`;
const nextConf = `module.exports = {
    reactStrictMode: true,
};
`;
const prettier = `{
    "arrowParens": "avoid",
    "tabWidth": 4,
    "useTabs": true,
    "printWidth": 80
  }`;
const tsconfig = `{
	"compilerOptions": {
		"target": "es6",
		"lib": ["dom", "dom.iterable", "esnext"],
		"allowJs": true,
		"skipLibCheck": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"noEmit": true,
		"esModuleInterop": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"incremental": true
	},
	"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
	"exclude": ["node_modules"]
}`;
const package = (name) => `{
    "name": "${name}",
    "version": "1.0.0",
    "description": "-",
    "scripts": {
      "dev": "next dev -H 0.0.0.0",
      "build": "next build",
      "lint": "next lint"
    },
    "keywords": [],
    "author": "-",
    "license": "MIT",
    "dependencies": {},
    "devDependencies": {}
}`;

module.exports = {
  theme,
  navBar,
  toggleButton,
  lib,
  _app,
  _document,
  notFound,
  index,
  eslint,
  nextConf,
  prettier,
  tsconfig,
  package,
};
