(function () {
  async function getData() {
	const base = (typeof window.BASEURL === 'string') ? window.BASEURL : '';
	const res = await fetch(base + '/search.json');
	return await res.json();
  }

  function renderResults(results, store) {
	const out = document.getElementById('search-results');
	if (!results.length) {
	  out.innerHTML = '<p>No results.</p>';
	  return;
	}
	const html = results.map(r => {
	  const item = store[r.ref];
	  const meta = []
		.concat(item.author ? [`by ${item.author}`] : [])
		.concat(item.disability ? [`<em>${item.disability}</em>`] : [])
		.join(' — ');
	  return `<article style="margin:1rem 0;">
		<h3 style="margin:0;"><a href="${item.url}">${item.title}</a></h3>
		<p style="margin:0.25rem 0;">${meta}</p>
	  </article>`;
	}).join('');
	out.innerHTML = html;
  }

  function buildIndex(items) {
	const store = {};
	items.forEach((it, i) => { store[i] = it; });

	const idx = lunr(function () {
	  this.ref('ref');
	  this.field('title');
	  this.field('content');
	  this.field('author');
	  this.field('disability');
	  this.field('tropes');
	  items.forEach((it, i) => {
		this.add({
		  ref: i,
		  title: it.title || '',
		  content: it.content || '',
		  author: it.author || '',
		  disability: it.disability || '',
		  tropes: Array.isArray(it.tropes) ? it.tropes.join(' ') : (it.tropes || ''),
		});
	  });
	});

	return { idx, store };
  }

  function initSearch(items) {
	const { idx, store } = buildIndex(items);
	const input = document.getElementById('search-input');
	input.addEventListener('input', (e) => {
	  const q = e.target.value.trim();
	  if (!q) {
		renderResults([], store);
		return;
	  }
	  const results = idx.search(q + '*');
	  renderResults(results, store);
	});
  }

  getData().then(items => {
	initSearch(items);
  });
})();
