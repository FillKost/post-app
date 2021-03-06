export function renderPost(post) {
    const tag = post.type === 'news' 
    ? '<li class="tag tag-blue tag-rounded">New</li>'
    : '<li class="tag tag-rounded">Note</li>'

    const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id)
    ? `<button class="button-round button-small button-danger"
    data-id="${post.id}">Delete from favorites</button>`
    : `<button class="button-round button-small button-primary"
    data-id="${post.id}">Save to favorites</button>`

    const ht = `
    <div class="panel">
    <div class="panel-head">
      <p class="panel-title">${post.title}</p>
      <ul class="tags">
        ${tag}
      </ul>
    </div>
    <div class="panel-body">
      <p class="multi-line">${post.fulltext}</p>
    </div>
    <div class="panel-footer w-panel-footer">
      <small>${post.date}</small>
      ${button}
    </div>
  </div>
    `  
    return ht
}