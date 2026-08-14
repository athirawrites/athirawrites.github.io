---
title: Books
layout: single
permalink: /books/
---

<ul style="list-type:none;">
{% assign items = site.books | sort: "title" %}
{% for book in items %}
  <li>
    <a href="{{ book.url | relative_url }}">{{ book.title }}</a><br>
    <img src="{{ book.cover_image }}" alt="Book cover for {{ book.title }}" style="max-width:120px;" /><br>
    {% if book.author %} by {{ book.author }}{% endif %}<br>
    {% if book.disability %} — <em>{{ book.disability }}</em>{% endif %}<br>
  </li>
{% endfor %}
</ul>
