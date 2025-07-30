const fs = require("fs");
const path = require("path");
const eslintDisableComment =
  "/* eslint-disable @typescript-eslint/prefer-namespace-keyword */\n";
const eslintDisaableEmptyObject =
  "/* eslint-disable @typescript-eslint/no-empty-object-type */";
const destinationFolder = "client/src/types";

const files = [
  {
    src: path.join(__dirname, "./server/genTypes.ts"),
    dest: path.join(__dirname, `./${destinationFolder}/contentTypes.d.ts`),
  },
  {
    src: path.join(__dirname, "./server/types/generated/components.d.ts"),
    dest: path.join(__dirname, `./${destinationFolder}/components.d.ts`),
  },
];

function copyFile({ src, dest }) {
  const destinationDir = path.dirname(dest);

  if (!fs.existsSync(src)) {
    console.error(`Source file does not exist: ${src}`);
    process.exit(1);
  }

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  let content = fs.readFileSync(src, "utf8");

  // Prefix interfaces and types with "IGen"
  content =
    eslintDisaableEmptyObject +
    eslintDisableComment +
    content
      .replace(/(interface|type)\s+([A-Za-z0-9_]+)/g, (_, kind, name) => {
        return `${kind} IGen${name}`;
      })
      .replace(/:\s*([A-Z][A-Za-z0-9_]+)/g, (_, name) => {
        return `: IGen${name}`;
      })
      .replace(/=\s*([A-Z][A-Za-z0-9_]+)/g, (_, name) => {
        return `= IGen${name}`;
      })
      .replace(/<([A-Z][A-Za-z0-9_]+)>/g, (_, name) => {
        return `<IGen${name}>`;
      });

  fs.writeFile(dest, content, (err) => {
    if (err) {
      console.error(`Error writing to destination file: ${err}`);
      process.exit(1);
    } else {
      console.log(`File ${src} copied and types prefixed successfully!`);
    }
  });
}

files.forEach((file) => copyFile(file));
