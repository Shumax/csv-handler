// module.exports = {
//   collectCoverage: true,
//   coverageProvider: 'v8',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   collectCoverageFrom: [
//     '**/*.{js,jsx,ts,tsx}',
//     '!**/*.d.ts',
//     '!**/node_modules/**',
//     '!<rootDir>/out/**',
//     '!<rootDir>/.next/**',
//     '!<rootDir>/*.config.js',
//     '!<rootDir>/coverage/**',
//   ],
//   moduleNameMapper: {
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

//     '^.+\\.(css|sass|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.ts',

//     '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i':
//       '<rootDir>/src/tests/__mocks__/fileMock.ts',

//     '^@/(.*)$': '<rootDir>/src/$1',
//     '\\.svg$': '<rootDir>/src/tests/__mocks__/svgMock.ts',
//   },
//   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
//   },
//   transformIgnorePatterns: [
//     '/node_modules/',
//     '^.+\\.module\\.(css|sass|scss)$',
//   ],
// };

const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['isomorphic-unfetch'],
};
module.exports = createJestConfig(customJestConfig);

