if (document.querySelector('[data-gu-name="headline"]')) {
  loadTheme()
  let article = document.getElementById("maincontent").innerText
  let headline = document.querySelector('[data-gu-name="headline"]').innerText
  let summary = document.querySelector('[data-gu-name="standfirst"]').innerText
  let author = document.querySelector('[rel="author"]').innerText.replace("By ", "")
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
