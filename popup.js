// popup.js
document.getElementById('forceClean').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "forceClean" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Content script not injected. Refreshing tab...");
          chrome.tabs.reload(tabs[0].id);
        } else {
          console.log("Forced cleanup triggered.");
        }
      });
    }
  });
});
