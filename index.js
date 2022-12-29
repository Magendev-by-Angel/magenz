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
	linkItem
} = require("./contents.js");
const fs = require("fs");

const createApp = appName => {
	// fs.writeFileSync("", ``);
	fs.mkdirSync(appName);
	process.chdir(appName);
	fs.mkdirSync("components");
	fs.mkdirSync("components/layouts");
	fs.mkdirSync("lib");
	fs.mkdirSync("pages");
	fs.mkdirSync("pages/api");

	fs.writeFileSync("components/navBar.tsx", navBar);
	fs.writeFileSync("components/ThemeToggleButton.tsx", toggleButton);
	fs.writeFileSync("components/layouts/main.tsx", ``);
	fs.writeFileSync("lib/theme.ts", theme);
	fs.writeFileSync("pages/api/index.ts", ``);
	fs.writeFileSync("pages/404.tsx", notFound);
	fs.writeFileSync("pages/_app.tsx", _app);
	fs.writeFileSync("pages/_document.tsx", _document);
	fs.writeFileSync("pages/index.tsx", index);

	fs.writeFileSync(".eslintrc.json", eslint);
	fs.writeFileSync(".prettierrc.json", prettier);
	fs.writeFileSync("next.config.js", nextConf);
	fs.writeFileSync("tsconfig.json", tsconfig);
	fs.writeFileSync("package.json", package(appName));
};

if (process.argv.length > 2) {
	const appName = process.argv[2];
	createApp(appName);
} else {
	console.log("Please give a name for your propject");
}
