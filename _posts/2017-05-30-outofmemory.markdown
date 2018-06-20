---
layout: post
title:  out of memory
description: A project exploring the structure and fading nature of memory, captured in a micro-site and as XML poetry
date:   2017-05-30 20:29:59 -0500
image: "assets/images/projects/outofmemory-1.png"
link: https://out-of-memory.glitch.me/
categories: project
---
This project was written during a course titled "Art, Writing, Technology: New Approaches to the Digital Humanities" taught by [Danny Snelson].

Every time we revisit a memory we are reconstructing it. In other words, a memory begins to fade after it’s experienced. A memory further degrades as time goes on–what could originally be told with descriptive, cinematic detail, eventually gets reduced to summarizing words and phrases.

[out of memory] is a digital library that reflects the way a memory deteriorates every time we revisit it. On the site, you’ll find memories contributed by friends, family, and anonymous strangers reflecting on moments that are as ordinary as eating fried chicken, waiting for an email, and laying down on grass, to really intimate and vulnerable moments of falling in love, heartbreak, coping with mental health, and turning points in life.

Like our own memory, there are limitations to this site. The memories degrade each time a user visits or refreshes the page. Over time, letters are deleted from the memory, making it slightly more difficult to read, but enough to be comprehensible. These memories are not repairable, meaning once it is complete deleted it will not be retrieved again. The site also has a finite amount of storage space of 15 of the memories at a time. In order to make room for newly uploaded memories, the oldest memories are deleted.

While developing this work, I was interested to not only see what people remember, but how they remember. Do some people remember how they felt more than what they saw or smelled? How do people denote “time”? As a precise calendar date or relative to another experience they had? How much were they willing to reveal even if they remained anonymous?

This process made me think about other ways we try to remember today that didn’t exist previously. In *The Enduring Ephemeral, or the Future is a Memory,* Wendy Hui Kyong Chun says our belief in digital electronic memory as “always there” has led to a crisis in historical documentation. We have grown to document and preserve our lives digitally, that I hope this site might ask us to reflect inwards, rather of outwards onto our memory objects of Instagram photos, Facebook albums, and Snapchat “memories.”

When visitors enter their memories, they are sifted into an XML as follows:

{% highlight ruby %}
  <memory>
    <title></title>
    <feeling></feeling>
    <time></time>
    <place></place>
    <event></event>
    <company></company>
    <sense>
      <sight></sight>
      <sound></sound>
      <smell></smell>
      <touch></touch>
      <taste></taste>
    </sense>
  </memory>
{% endhighlight %}

![](/assets/images/projects/outofmemory-2.png)

Thanks to [Josh Shi] for helping me bring the site to life.

[out of memory]: https://out-of-memory.glitch.me
[Danny Snelson]: https://dss-edit.com/
[Josh Shi]: https://joshshi.com
