function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

if (document.querySelector('.date')) {
    document.querySelectorAll('.take-explainer').forEach(element => element.remove());
    document.querySelectorAll('.take-action').forEach(element => element.remove());

    let headline = document.querySelector('.pane-page-title').innerText;
    let article = document.querySelector('[role="article"]').innerText;
    let author = document.querySelector('.byline').innerText.replace("BY ", "");
    let date = document.querySelector('.date').innerText;

    document.documentElement.innerHTML = `
    <head>
        <title>${headline}</title>
    </head>
    <body>
        <h1>${headline}</h1>
        <p class="author">By <b>${toTitleCase(author)}</b> | ${toTitleCase(date)}</p>
        <p class="summary">Service does not provide summaries.</p>
        <p class="article">${article}</p>
    </body>
    `
}

