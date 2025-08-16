async function scrapeProfile() {
  const name = document.querySelector(".pv-text-details__left-panel h1")?.innerText || "";
  const location = document.querySelector(".pv-text-details__left-panel .text-body-small")?.innerText || "";
  const about = document.querySelector(".pv-about-section")?.innerText || "";
  const bioLine = document.querySelector(".text-body-medium.break-words")?.innerText || "";
  
  let followerCount = 0, connectionCount = 0;
  document.querySelectorAll(".pv-top-card--list-bullet li").forEach(el => {
    const txt = el.innerText.toLowerCase();
    if (txt.includes("followers")) followerCount = parseInt(txt);
    if (txt.includes("connections")) connectionCount = parseInt(txt);
  });

  const profileData = {
    name,
    url: window.location.href,
    about,
    bio: bioLine, 
    location,
    followerCount,
    connectionCount,
    bioLine
  };

  // Send to API
  await fetch("http://localhost:3000/profiles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData)
  });

  chrome.runtime.sendMessage({ action: "nextProfile" });
}

setTimeout(scrapeProfile, 5000); // time for page to load
