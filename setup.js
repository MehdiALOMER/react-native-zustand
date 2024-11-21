// scripts/setup.js
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const appJsonPath = path.resolve(__dirname, '..', 'app.json');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the name of your app: ', (name) => {
    rl.question('Enter the slug for your app: ', (slug) => {
        const appJson = {
            "expo": {
                "name": name,
                "slug": slug,
                "version": "1.0.0",
                "assetBundlePatterns": ["**/*"],
                "ios": {
                    "supportsTablet": true
                },
                "android": {
                    "adaptiveIcon": {
                        "foregroundImage": "./assets/adaptive-icon.png",
                        "backgroundColor": "#FFFFFF"
                    }
                },
                "web": {
                    "favicon": "./assets/favicon.png"
                }
            }
        };

        fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
        rl.close();
    });
});
