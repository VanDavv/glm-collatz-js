const path = require('path');
const {execSync} = require('child_process');

const yajsapi_path = path.join(require.main.paths[0], "yajsapi");
console.log("Installing dependencies...")
execSync('yarn', {cwd: yajsapi_path});
console.log("Building API...")
execSync('yarn build', {cwd: yajsapi_path});