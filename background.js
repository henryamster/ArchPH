chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openArchiveSnapshot",
    title: "Open as Archive Snapshot",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openArchiveSnapshot") {
    const url = info.linkUrl;
    if (url) {
      const archiveUrl = `https://archive.ph/newest/${url}`;
      chrome.tabs.create({ url: archiveUrl });
    }
  }
});
