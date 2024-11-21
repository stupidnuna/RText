document.getElementById("setButton").addEventListener("click", function() {
    chrome.storage.sync.set({ theme: document.getElementById("themeInput").value }, function() {
        // Nothing needs to occur after theme is set, 
        // although, can probably have a response if users want.
        // example: alert("Theme has been set.")
      });
})

document.getElementById("debug").addEventListener("click", chrome.storage.sync.clear())