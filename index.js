const { execSync } = require("child_process");
const {
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
} = require("./contents.js");
const fs = require("fs");

const createApp = (appName) => {
  // fs.writeFileSync("", ``);
  fs.mkdirSync(appName);
  process.chdir(appName);
  fs.mkdirSync("components");
  fs.mkdirSync("components/layouts");
  fs.mkdirSync("lib");
  fs.mkdirSync("pages");
  fs.mkdirSync("pages/api");

  fs.writeFileSync("components/navBar.tsx", ``);
  fs.writeFileSync("components/ThemeToggleButton.tsx", ``);
  fs.writeFileSync("components/layouts/main.tsx", ``);
  fs.writeFileSync("lib/theme.ts", ``);
  fs.writeFileSync("pages/api/index.ts", ``);
  fs.writeFileSync("pages/404.tsx", ``);
  fs.writeFileSync("pages/_app.tsx", ``);
  fs.writeFileSync("pages/_document.tsx", ``);
  fs.writeFileSync("pages/index.tsx", ``);

  fs.writeFileSync(".eslintrc.json", ``);
  fs.writeFileSync(".prettierrc.json", ``);
  fs.writeFileSync("next.config.js", ``);
  fs.writeFileSync("tsconfig.json", ``);
  fs.writeFileSync("package.json", ``);
};

if (process.argv.length > 2) {
  const appName = process.argv[2];
} else {
  console.log("Please give a name for your propject");
}
