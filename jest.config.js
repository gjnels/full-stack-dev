const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Path to the Next.js app to load next.config.js and .env files into testing environment
  dir: "./",
});

// Custom config passed to Jest
/** @type {import("jest").Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // extra options to pass to Jest
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
};

// next/jest will load the Next.js config asynchronously
module.exports = createJestConfig(customJestConfig);
