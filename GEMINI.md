# Project Overview

This is a simple Chrome extension that hides YouTube Shorts from the user's feed. It is a Manifest V3 extension written in vanilla JavaScript.

The extension works by injecting a content script (`content.js`) into YouTube pages. This script uses a `MutationObserver` to watch for changes in the DOM and hides any elements that are identified as YouTube Shorts. The specific selector used to identify shorts is `ytd-rich-section-renderer[is-shorts]`.

The background script (`background.js`) is currently empty and does not have any functionality.

# Building and Running

There are no build steps required for this project. To run the extension, follow these steps:

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable "Developer mode" in the top right corner.
3.  Click on "Load unpacked" and select the project directory.
4.  The extension will be loaded and active. You can test it by navigating to YouTube.

# Development Conventions

*   The project follows the standard structure for a Chrome extension.
*   The code is written in vanilla JavaScript.
*   There are no explicit coding style guidelines, but the existing code is simple and easy to read.
*   There are no tests included in this project.
