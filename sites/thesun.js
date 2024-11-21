if (document.querySelector(".article__content")) {
  let headline = document.querySelector(".article__headline").innerText
  let summary = document.querySelectorAll(".article__content p")[1].innerText
  let author = document.querySelector(".article__author").innerText.replace("By ", "")
  let update = document.querySelector(".article__updated").innerText

  let article = Array.from(document.querySelectorAll(".article__content p"))
    .map(paragraph => paragraph.innerText)
    .join(" ")

  article = article
    .replace(summary, "")
    .replace("Sign up for the Showbiz newsletter", "")
    .replace("Your info will be used in accordance with our Privacy Policy", "")

  document.documentElement.innerHTML = `
  <head>
    <title>${headline}</title>
  </head>
  <body>
    <h1>${headline}</h1>
    <p>By <b>${author}</b> | ${update}</p>
    <p class="summary">${summary}</p>
    <p class="article">${article}</p>
  </body>
  `
}
