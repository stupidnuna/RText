if (document.querySelector('[data-testid="headline"]')) {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("RText: Article limit bypass failed, localStorage is unavailable. Detailed error below.\n" + error);
  }
  

  let headline = document.querySelector('[data-testid="headline"]').innerText
  let summary = document.getElementById("article-summary").innerText
  let article = document.querySelector('[name="articleBody"]').innerText
  .replace(
    "Subscribe to The Times to read as many articles as you like.", "")
    .replace(/We are having trouble retrieving the article content\. Please enable JavaScript in your browser settings\. Thank you for your patience while we verify access\. If you are in Reader mode please exit and log into your Times account, or subscribe for all of The Times\. Thank you for your patience while we verify access\. Already a subscriber\? Log in\. Want all of The Times\? Subscribe\./g, "<br><br>Sadly, due to the NY times being the way it is, the rest of the article content is unavailable. Sorry.");
  let author = document.getElementsByClassName("css-4anu6l")[0].innerText.replace("By ", "")
  
  document.documentElement.innerHTML = `
  <head>
  <title>${headline}</title>
  </head>
  
  <body>
  <h1>${headline}</h1>
  <p class="author">By <b>${author}</b></p>
  <p class="summary">${summary}</p>
  <p class="article">${article}</p>
  </body>
  `
}
