function incrementCorrectTime(tab){
  if (!tab){return;}

  //console.log(tab.url);
  if (tab.url === 'chrome://extensions/'){
    console.log(tab.url);
  }
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  incrementCorrectTime(tab);
}

setInterval(getCurrentTab, 250);