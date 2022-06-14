import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        baseURL: "http://localhost:8080/"
    },
    webServer: {
        command: 'npm run start',
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
};
export default config;