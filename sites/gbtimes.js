if (document.querySelector('[itemprop="headline"]')) {
    let headline = document.querySelector('[itemprop="headline"]').innerText
    let article = document.querySelector('[itemprop="text"]').innerText
    let author = document.querySelector('[class="entry-meta"]').innerText.replace("By ", "")

    document.documentElement.innerHTML = `
    <head>
        <title>${headline}</title>
    </head>
    <body>
        <h1>${headline}</h1>
        <p class="author">By <b>${author}</b></p>
        <p class="summary">Service does not provide summaries.</p>
        <p class="article">${article}</p>
    </body>
    `
}
