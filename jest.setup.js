// Options that will be passed to Jest before each run

import "@testing-library/jest-dom";

// Mock next/router
jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src = "", alt = "" }) => {
    // eslint-disable-next-line
    return <img src={src} alt={alt} />;
  },
}));

// Mock next/head
jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children = null }) => {
    return <>{children}</>;
  },
}));
