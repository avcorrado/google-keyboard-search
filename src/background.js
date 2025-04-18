chrome.commands.onCommand.addListener((command) => {
  if (command === "search-google") {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { action: "getSelection" });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "searchGoogle" && request.text) {
    const query = encodeURIComponent(request.text);
    chrome.tabs.create({ url: `https://www.google.com/search?q=${query}` });
  }
});