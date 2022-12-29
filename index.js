const { execSync } = require("child_process");
const fs = require("fs");

const createApp = (appName) => {
  fs.mkdirSync(appName);
  process.chdir(appName);
};

if (process.argv.length > 2) {
  const appName = process.argv[2];
} else {
  console.log("Please give a name for your propject");
}
