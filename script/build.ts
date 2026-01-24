import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";
import path from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "memorystore",
  "pg",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild({
    build: {
      outDir: path.resolve("dist/public"),
      emptyOutDir: true,
    },
  });

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  
  const nodeBuiltins = [
    "assert", "buffer", "child_process", "cluster", "console", "constants", "crypto", "dgram", "dns", "domain", "events", 
    "fs", "fs/promises", "http", "https", "module", "net", "os", "path", "process", "punycode", "querystring", "readline", 
    "repl", "stream", "string_decoder", "sys", "timers", "tls", "tty", "url", "util", "v8", "vm", "zlib"
  ];

  const externals = [
    ...allDeps.filter((dep) => !allowlist.includes(dep)),
    ...nodeBuiltins
  ];

  await esbuild({
    entryPoints: ["api/index.ts"],
    platform: "node",
    bundle: true,
    format: "esm",
    outfile: "dist/index.js",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
    banner: {
      js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
    },
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
