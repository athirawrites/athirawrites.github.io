---
title: Search
layout: single
permalink: /search/
---

<input id="search-input" type="search" placeholder="Search books, authors, tropes…" style="width:100%; padding:0.75rem;">

<div id="search-results" style="margin-top:1rem;"></div>

<!-- Set baseurl for JS (supports project pages) -->
<script>window.BASEURL = "{{ site.baseurl | default: '' }}";</script>

<!-- Lunr from CDN -->
<script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>

<!-- Your search code -->
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>