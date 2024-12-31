---
title: Artblr gallery
description: A VR art gallery, with data coming from a custom API.
publishDate: 2021-12-31 00:00:00
attribution: Created as developer at <a href="https://www.distantia.ca">Distantia</a>
videoPreview: /artblr-gallery
img: ./artblr-gallery.jpg
filters:
  - VR
  - Godot 3
  - Web
tags:
  - VR experience
  - Godot 3
  - REST API
  - Fancy artworks
---

## Technologies used

- Godot 3.4.3
  - XR Tools
  - XR Plugin
  - Custom theming
  - Custom Android export templates for encryption
  - HTTP API to get images from Artblr
- Oculus Quest 2
- REST API
  - PHP
  - MySQL

## Project overview

Artblr is one of the largest websites managed by Distantia. It is an online art gallery where you can view works from different artists. Around early December 2021, my project manager wanted to create a VR experience for this gallery. The goal was to launch the world's largest virtual art gallery. In total, over 30,000 artworks are listed on the website, created by more than 6,300 artists. I am the sole programmer who developed this experience. Besides the VR application, I had to create an API to retrieve the artworks.

The application was developed using the free and open-source game engine, [Godot](https://godotengine.org/). Having never really programmed video games before, I was afraid that VR would be complex and challenging to implement, but I only needed one plugin. Of course, I faced several challenges since, among other things, the free Artblr plan limits artists to only two artworks. So, I had to create a system that could load different rooms depending on the number of artworks the artist had created. Additionally, we needed rooms to display artworks from a specific country, so some "sub-galleries" had a large quantity of artworks, which affected performance.

At the time of writing, the project has been put on hold indefinitely and is not available to the public. The video below is not representative of the final project, but shows a part of the VR experience and captures the general idea quite well.

<iframe src="https://www.youtube-nocookie.com/embed/rLD5zsYyT1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
