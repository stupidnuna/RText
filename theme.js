function loadDefault() {
  let themeEle = document.createElement("style");
  themeEle.innerText = `
  body {
      font-family: sans-serif;
      width: 500px;
      background-color: #12100D;
      color: #FFFAC2;
  }

  .summary {
      color: #CBB58D;
  }`;
  document.body.append(themeEle);
}

chrome.storage.sync.get("theme", function(result) {
  let theme = result.theme;

  if (theme) {
      fetch(theme)
          .then(response => {
              if (!response.ok) {
                  throw new Error("Network response was not ok");
              }
              return response.text();
          })
          .then(themeContent => {
              let themeEle = document.createElement("style");
              themeEle.innerText = themeContent;
              document.body.append(themeEle);
          })
          .catch(error => {
              console.error("Failed to fetch theme:", error);
              loadDefault()
              alert("Failed to load the theme, resorting to default.");
          });
  } else {
    loadDefault()
  }
});
