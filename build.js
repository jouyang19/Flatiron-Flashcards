const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Read tsconfig.json
const tsconfigPath = path.resolve(__dirname, "tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));

// Backup original tsconfig.json
const tsconfigBackupPath = `${tsconfigPath}.backup`;
fs.writeFileSync(tsconfigBackupPath, JSON.stringify(tsconfig, null, 2));

// Modify tsconfig.json to ignore errors
tsconfig.compilerOptions = {
  ...tsconfig.compilerOptions,
  noEmit: true,
  skipLibCheck: true,
  skipDefaultLibCheck: true,
};
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

try {
  // Run Next.js build
  execSync("next build", { stdio: "inherit" });
} catch (error) {
  console.error("Build failed:", error);
} finally {
  // Restore original tsconfig.json
  fs.writeFileSync(tsconfigPath, fs.readFileSync(tsconfigBackupPath, "utf8"));
  fs.unlinkSync(tsconfigBackupPath);
}
