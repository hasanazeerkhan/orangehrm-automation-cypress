const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    video: true,
    videoCompression: 32, // Sets the video compression level (0-100)
    videoMaxWidth: 1280, // Maximum width of the video
    videoMaxHeight: 1280, // Maximum height of the video
    videoUploadOnPasses: false, // Upload video for passed tests
    setupNodeEvents(on, config) {
    
    },
  },
});
