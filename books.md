---
title: Books
layout: single
permalink: /books/
---

<ul style="
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
">
{% assign items = site.books | sort: "title" %}
{% for book in items %}
  <li>
    <a href="{{ book.url | relative_url }}">
      <img
        src="{{ book.cover_image }}"
        alt="Book cover for {{ book.title }}"
        style="width: 100%; max-width: 200px; height: auto;"
      />
    </a><br>

    <strong>
      <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
    </strong><br>

    {% if book.author %}
      by {{ book.author }}<br>
    {% endif %}

    {% if book.disability %}
      <em>{{ book.disability }}</em>
    {% endif %}
  </li>
{% endfor %}
</ul>
