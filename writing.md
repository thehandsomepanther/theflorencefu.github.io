---
layout: home
---
<ol>{% for post in site.posts %}
{% if post.categories contains 'writing' %}
    {% unless post.categories contains 'unpublished' %}
    <li class="projects-post-item">
      <div>
        {% if post.image %}
        <div class="projects-post-img-container">
          <img class="projects-post-img" src="{{ post.image }}" />
        </div>
        {% endif %}

        <div class="projects-post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
          <div class="projects-post-desc">{{ post.description }}</div>
        </div>
    </li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ol>
