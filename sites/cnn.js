// Code does not work, changes are due. CNN has changed their site structure since I made this script a very long time ago.
/*
if (document.querySelector('[data-editable="headlineText"]')) {
  let headline = document.querySelector(
    '[data-editable="headlineText"]'
  ).innerText
  let article = document.querySelector('[itemprop="articleBody"]').innerText.replaceAll("\n", "<br>")
  let summary = document.querySelector(
    '[data-editable="metaCaption"]'
  ).innerText
  let author = document.querySelector('[class="byline__name"]').innerText
  let timestamp = document.querySelector('[class="timestamp"]').innerText

  document.documentElement.innerHTML = `
  <head>
  <title>${headline}</title>
  </head>
  
  <body>
  <h1>${headline}</h1>
  <p class="author">By <b>${author}</b>; ${timestamp}</p>
  <p class="summary">${summary}</p>
  <p class="article">${article}</p>
  </body>
  `
}
  */
