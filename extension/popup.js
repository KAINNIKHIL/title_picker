const btn = document.getElementById("start");

btn.addEventListener("click", () => {
  const links = document.getElementById("links").value.split("\n").filter(l => l.trim());
  chrome.storage.local.set({ profileLinks: links }, () => {
    chrome.runtime.sendMessage({ action: "startScraping" });
    chrome.tabs.create({ url: "http://localhost:3000/profiles" });
  });
});
