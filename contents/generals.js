const toggleButton = require("./toggleButton.js")
const linkItem = require("./linkItem.js")
const mainLayout = require("./main.js")
const navBar = require("./navBar.js")

const theme = `import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		disableTransitionOnChange: false,
	},
});`;

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
const package = name => `{
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
	_app,
	_document,
	notFound,
	index,
	eslint,
	nextConf,
	prettier,
	tsconfig,
	package,
	mainLayout,
	linkItem
};