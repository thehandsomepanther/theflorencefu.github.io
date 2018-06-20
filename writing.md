---
layout: home
---
<ol>{% for post in site.posts %}
{% if post.categories contains 'writing' %}
    {% unless post.categories contains 'unpublished' %}
    <li>
      <div>
        {% if post.image %}
          <img class="img-{{ post.uid }}" src="{{ post.image }}" />
        {% endif %}

      <div class="projects-post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
        <div class="projects-post-desc">{{ post.description }}</div>
      </div>
    </li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ol>
