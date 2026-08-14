---
title: Books
layout: single
permalink: /books/
---

<ul>
{% assign items = site.books | sort: "title" %}
{% for book in items %}
  <li>
    <img src="{{ book.cover_image }}" alt="Book cover for {{ book.title }}" style="max-width:120px;"/>
    <a href="{{ book.url | relative_url }}">{{ book.title }}</a>
    {% if book.author %} by {{ book.author }}{% endif %}
    {% if book.disability %} — <em>{{ book.disability }}</em>{% endif %}
  </li>
{% endfor %}
</ul>
