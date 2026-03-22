// content.js
console.log("YouTube Shorts Blocker is ACTIVE.");

function hideShorts() {
  // 1. Target obvious container elements
  const containers = document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer, ytd-item-section-renderer, ytd-reel-item-renderer, ytd-rich-shelf-renderer');
  
  containers.forEach(container => {
    // Check if it contains "Shorts" in text, title, or icon attributes
    const containsShorts = 
      container.innerText?.toLowerCase().includes('shorts') || 
      container.querySelector('[title*="Shorts"]') || 
      container.querySelector('yt-icon[type="shorts"]');

    if (containsShorts) {
      container.style.setProperty('display', 'none', 'important');
    }
  });

  // 2. Target links specifically to prevent them from showing up in sidebars or grids
  const links = document.querySelectorAll('a[href*="/shorts/"]');
  links.forEach(link => {
    // Find the nearest video container and hide it
    const videoContainer = link.closest('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-reel-item-renderer');
    if (videoContainer) {
      videoContainer.style.setProperty('display', 'none', 'important');
    } else {
      link.style.setProperty('display', 'none', 'important');
    }
  });

  // 3. Special case for the "Shorts" tab in the side guide
  const guideEntries = document.querySelectorAll('ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer');
  guideEntries.forEach(entry => {
    if (entry.innerText?.toLowerCase().includes('shorts') || entry.getAttribute('aria-label')?.toLowerCase().includes('shorts')) {
      entry.style.setProperty('display', 'none', 'important');
    }
  });
}

// Run frequently enough to catch dynamic loading
setInterval(hideShorts, 1000);

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "forceClean") {
    hideShorts();
    sendResponse({ status: "done" });
  }
});

// Use MutationObserver for faster response
const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });
