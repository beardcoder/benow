module.exports = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^.+\\.css$': '<rootDir>/config/jest/enzyme.js',
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga).*$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less).*$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@@/(.*)$': '<rootDir>/$1',
    },
};
