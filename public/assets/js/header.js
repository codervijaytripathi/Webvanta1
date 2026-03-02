fetch('/header.html') // स्लैश (/) का मतलब रूट से शुरू करो
  .then(response => {
    if (!response.ok) throw new Error('Header not found');
    return response.text();
  })
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Header load error:', err));
