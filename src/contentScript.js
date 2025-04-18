chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelection") {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      chrome.runtime.sendMessage({ action: "searchGoogle", text: selection });
    } else {
      alert("No text selected!");
    }
  }
});