#!/usr/bin/env node

const { execSync } = require("child_process");
const {
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
	linkItem,
} = require("./contents.js");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const createApp = (appName, isLocal, isDeflt) => {
	if (isLocal) {
		fs.mkdirSync(appName);
		process.chdir(appName);
	}
	fs.mkdirSync("components");
	fs.mkdirSync("components/layouts");
	fs.mkdirSync("lib");
	fs.mkdirSync("pages");
	fs.mkdirSync("pages/api");
	console.log("Folders created");
	fs.writeFileSync("components/navBar.tsx", navBar);
	fs.writeFileSync("components/ThemeToggleButton.tsx", toggleButton);
	fs.writeFileSync("components/layouts/main.tsx", mainLayout);
	fs.writeFileSync("components/LinkItem.tsx", linkItem);
	fs.writeFileSync("lib/theme.ts", theme);
	fs.writeFileSync("pages/api/index.ts", ``);
	fs.writeFileSync("pages/404.tsx", notFound);
	fs.writeFileSync("pages/_app.tsx", _app);
	fs.writeFileSync("pages/_document.tsx", _document);
	fs.writeFileSync("pages/index.tsx", index);
	console.log("Files inside folders created");
	fs.writeFileSync(".eslintrc.json", eslint);
	fs.writeFileSync(".prettierrc.json", prettier);
	fs.writeFileSync("next.config.js", nextConf);
	fs.writeFileSync("tsconfig.json", tsconfig);
	fs.writeFileSync("package.json", package(appName));
	fs.writeFileSync(".gitignore", "node_modules");
	console.log("Files outside folders created");
	if (isDeflt) {
		execSync(
			"npm install react react-dom next @chakra-ui/react @emotion/react @emotion/styled framer-motion",
			{ stdio: "inherit" }
		);
		execSync(
			"npm install -D eslint prettier typescript @types/node @types/react @types/next",
			{ stdio: "inherit" }
		);
	}
};
// const appName = process.argv[2];
// if (!appName) {
// 	console.error("Error: App name is required");
// 	process.exit(1);
// }
let isLocal = false;
let isDeflt = false;
let folderName = "";
rl.question(
	"Name of the folder (leave it blank if you want it in the current folder): ",
	answer => {
		isLocal = answer !== "";
		folderName = answer;
		console.log(
			isLocal
				? `Creating project "${answer}"`
				: "Creating project in current folder location"
		);
		rl.question(
			"Do you want to install the default dependencies? [Y] or [N], anything else will be taken as a No ",
			answer => {
				isDeflt = answer === "Y" || answer === "y";
				console.log(
					isDeflt
						? "Adding React, Next and Chakra"
						: "Not added dependencies, you'll need to add them manually"
				);
				createApp(folderName, isLocal, isDeflt);
				rl.close();
			}
		);
	}
);
