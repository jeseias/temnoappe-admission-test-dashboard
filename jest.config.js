module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@components': '<rootDir>/src/components/$1',
    '@test-utils': '<rootDir>/src/modules/test-utils.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
