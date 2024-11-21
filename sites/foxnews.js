function filter(text) {
  const keywords = [
    "FOX NEWS", "Getty Images", "FOXNEWS.COM", "Foxnews.com", 
    "Fox News", "CLICK HERE", "Free articles", "View this post", "CLICKING HERE"
  ]
  
  return text.split("\n")
    .filter(line => !keywords.some(keyword => line.includes(keyword)) && line.trim())
    .join("<br><br>")
}

if (document.querySelector(".headline")) {
  const headline = document.querySelector(".headline").innerText
  const summary = document.querySelector(".sub-headline").innerText
  let paragraphs = document.querySelector('[class="article-body"], p[class="speakable"]').innerText

  paragraphs = filter(paragraphs)

  document.documentElement.innerHTML = `
    <head>
    <title>${headline}</title>
    </head>
    
    <body>
      <h1>${headline}</h1>
      <p class="summary">${summary}</p>
      <p class="article">${paragraphs}</p>
    </body>
  `
}
