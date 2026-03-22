# YouTube Shorts Blocker

This is a simple Chrome extension that hides YouTube Shorts from your feed.

## How to Install

1.  Download or clone this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable "Developer mode" in the top right corner.
4.  Click on "Load unpacked" and select the directory where you saved the files.
5.  The extension should now be loaded and active. You can test it by navigating to YouTube.

## How it Works

The extension uses a content script to inject JavaScript into YouTube pages. The script uses a `MutationObserver` to watch for changes in the DOM and hides any elements that are identified as YouTube Shorts.

## Limitations

This extension is a work in progress. It may not hide all Shorts, and it may not work correctly on all parts of YouTube. If you find any issues, please feel free to contribute to the project.
