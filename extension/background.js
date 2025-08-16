let currentIndex = 0;
let profileLinks = [];

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "startScraping") {
    chrome.storage.local.get("profileLinks", (data) => {
      profileLinks = data.profileLinks || [];
      currentIndex = 0;
      openNextProfile();
    });
  } else if (msg.action === "nextProfile") {
    currentIndex++;
    if (currentIndex < profileLinks.length) {
      openNextProfile();
    }
  }
});

function openNextProfile() {
  chrome.tabs.create({ url: profileLinks[currentIndex], active: true });
}
